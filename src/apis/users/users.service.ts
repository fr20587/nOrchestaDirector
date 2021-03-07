// NestJS Modules
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import * as bcrypt from 'bcrypt';

// Mongoose Module
import { Model } from 'mongoose';

// DTO
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

// Entity
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  // Crear usuario
  public async create(createUserDto: CreateUserDto) {
    const existUser = await this.userModel.findOne({
      email: createUserDto.email,
    });
    if (existUser) {
      return 'Correo Electrónico no válido, el usuario ya existe';
    }

    const salt = await bcrypt.genSalt(13);
    const user = new this.userModel({
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, salt),
    });
    await user.save();
    return user;
  }

  // Obtener todos los usuarios
  public async findAll(): Promise<User[]> {
    const users = await this.userModel.find();
    return users;
  }

  // Obtener un usuario
  public async findOne(id: string): Promise<User> {
    const user = await this.userModel.findById(id);
    return user;
  }

  // Actualizar usuario
  public async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userModel.findById(id);
    if (user.email !== updateUserDto.email) {
      const existUser = await this.userModel.findOne({
        email: updateUserDto.email,
      });
      if (existUser) {
        return 'Correo Electrónico no válido, el usuario ya existe';
      }
    }

    const updatedUser = await this.userModel.findByIdAndUpdate(
      id,
      updateUserDto,
      { new: true },
    );
    return updatedUser;
  }

  // Eliminar usuario
  public async remove(id: string) {
    await this.userModel.findByIdAndDelete(id);
    return 'Usuario eliminado correctamente';
  }
}
