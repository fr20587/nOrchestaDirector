// Nest Module
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';

// Third's Module
import * as bcrypt from 'bcrypt';

// Mongoose Module
import { Model } from 'mongoose';

// DTO
import { AuthSignUpDto } from './dto/auth-sign-up.dto';
import { AuthSignInDto } from './dto/auth-sign-in.dto';

// Entities
import { Auth } from './entities/auth.entity';
import { User } from '../users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('Auth') private readonly authModel: Model<Auth>,
    @InjectModel('User') private readonly userModel: Model<User>,
    private _jwtService: JwtService,
  ) {}

  // Registro de usuario
  public async signUpUser(
    authSignUpDto: AuthSignUpDto,
  ): Promise<User | string | void> {
    const user = await this.userModel.findOne({
      email: authSignUpDto.email,
    });
    if (user) {
      return 'Correo Electrónico no válido, el usuario ya existe';
    }
    const salt = await bcrypt.genSalt(13);
    const newUser = new this.userModel({
      ...authSignUpDto,
      //roles: ['USER_ROLE'],
      salt,
      password: await bcrypt.hash(authSignUpDto.password, salt),
    });

    // Asignar el rol user por defecto a los usuarios
    //newUser.roles = ['USER_ROLE'];

    await newUser.save();
    return newUser;
  }

  // Inicio de sesión de usuario
  public async signInUser(
    authSignInDto: AuthSignInDto,
  ): Promise<string | void> {
    const user = await this.userModel.findOne({
      email: authSignInDto.email,
    });
    if (!user) {
      return 'Credenciales Invalidas';
      // throw new UnauthorizedException('Credenciales Invalidas');
    }

    const matchPassword = await bcrypt.compare(
      authSignInDto.password,
      user.password,
    );
    if (!matchPassword) {
      return 'Credenciales Invalidas';
      // throw new UnauthorizedException('Credenciales Invalidas');
    } else {
      return await this._jwtService.sign({ id: user.id });
    }
  }
}
