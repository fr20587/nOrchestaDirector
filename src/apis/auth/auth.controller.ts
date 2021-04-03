// Nest Module
import {
  Controller,
  Post,
  Body,
  Res,
  ValidationPipe,
  HttpStatus,
  Get,
  UseGuards,
  Req,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { AuthGuard } from '@nestjs/passport';
import { Model } from 'mongoose';
import { User } from '../users/entities/user.entity';

// Service
import { AuthService } from './auth.service';
import { GetUser } from './decorators/user.decorator';

// DTO
import { AuthSignInDto } from './dto/auth-sign-in.dto';
import { AuthSignUpDto } from './dto/auth-sign-up.dto';
import { IJWTPayload } from './interfaces/jwt-payload.interface';

@Controller('auth')
export class AuthController {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
    private readonly authService: AuthService,
    private _jwtService: JwtService,
  ) {}

  // Registro de usuarios
  @Post('/signup')
  public async signUpUser(
    @Res() res,
    @Body(ValidationPipe) authSignUpDto: AuthSignUpDto,
  ) {
    try {
      const newUser = await this.authService.signUpUser(authSignUpDto);
      if (newUser === 'Correo Electrónico no válido, el usuario ya existe') {
        return res.status(HttpStatus.CONFLICT).json({
          ok: false,
          newUser,
        });
      } else {
        return res.status(HttpStatus.CREATED).json({
          ok: true,
          message: 'Usuario creado correctamente',
          newUser,
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error inesperado.',
      });
    }
  }

  // Inicio de sesión de usuario
  @Post('/signin')
  public async signInUser(
    @Res() res,
    @Body(ValidationPipe) authSignInDto: AuthSignInDto,
  ) {
    try {
      const response = await this.authService.signInUser(authSignInDto);
      if (response === 'Credenciales Invalidas') {
        return res.status(HttpStatus.BAD_REQUEST).json({
          ok: false,
          message: 'Credenciales Invalidas',
        });
      } else if (!response) {
        return res.status(HttpStatus.UNAUTHORIZED).json({
          ok: false,
          message: 'Credenciales Invalidas',
        });
      } else if (response) {
        return res
          .status(HttpStatus.ACCEPTED)
          .header('x-token', response)
          .json({
            ok: true,
            message: 'Ha iniciado sesión correctamente',
            token: response,
          });
      }
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error inesperado.',
      });
    }
  }

  // Renovar token
  @Get('/renewToken')
  public async renewToken(@Res() res, @Req() req) {
    try {
      const xtoken = req.header('x-token');
      const token = await this.authService.renewToken(xtoken);
      const decoded: IJWTPayload = this._jwtService.verify(token);
      const user = await this.userModel.findById(decoded.id, { password: 0 });
      return res.status(HttpStatus.ACCEPTED).header('x-token', token).json({
        ok: true,
        token,
        user,
      });
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error inesperado.',
      });
    }
  }
}
