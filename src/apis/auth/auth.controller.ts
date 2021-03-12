// Nest Module
import {
  Controller,
  Post,
  Body,
  Res,
  ValidationPipe,
  HttpStatus,
} from '@nestjs/common';

// Service
import { AuthService } from './auth.service';

// DTO
import { AuthSignInDto } from './dto/auth-sign-in.dto';
import { AuthSignUpDto } from './dto/auth-sign-up.dto';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // Registro de usuarios
  @Post('/signUpUser')
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
  @Post('/signInUser')
  public async signInUser(
    @Res() res,
    @Body(ValidationPipe) authSignInDto: AuthSignUpDto,
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
        return res.status(HttpStatus.ACCEPTED).json({
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
}
