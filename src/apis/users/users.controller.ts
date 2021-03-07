import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('api/user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // Crear usuario
  @Post('/')
  public async create(@Res() res, @Body() createUserDto: CreateUserDto) {
    try {
      const user = await this.usersService.create(createUserDto);
      if (user === 'Correo Electrónico no válido, el usuario ya existe') {
        return res.status(HttpStatus.CONFLICT).json({
          ok: false,
          user,
        });
      }

      return res.status(HttpStatus.CREATED).json({
        ok: true,
        message: 'Usuario creado correctamente',
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

  // Obtener usuarios -- cRud
  @Get('/')
  public async findAll(@Res() res) {
    try {
      const users = await this.usersService.findAll();
      return res.status(HttpStatus.OK).json({
        ok: true,
        users,
      });
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error inesperado.',
      });
    }
  }

  // Obtener un usuario
  @Get('/:id')
  public async findOne(@Res() res, @Param('id') id: string) {
    try {
      const user = await this.usersService.findOne(id);
      if (!user) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'El usuario no existe',
        });
      }
      return res.status(HttpStatus.OK).json({
        ok: true,
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

  // Actualizar usuario
  @Put('/:id')
  public async update(
    @Res() res,
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    try {
      const updatedUser = await this.usersService.update(id, updateUserDto);

      if (
        updatedUser === 'Correo Electrónico no válido, el usuario ya existe'
      ) {
        return res.status(HttpStatus.CONFLICT).json({
          ok: false,
          updatedUser,
        });
      }

      if (!updatedUser) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'El usuario no existe',
        });
      }
      return res.status(HttpStatus.OK).json({
        ok: true,
        message: 'Usuario actualizado correctamente',
        updatedUser,
      });
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error inesperado.',
      });
    }
  }

  // Eliminar usuario
  @Delete(':id')
  public async remove(@Res() res, @Param('id') id: string) {
    try {
      const responseDeletedUser = await this.usersService.remove(id);
      if (!responseDeletedUser) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'El usuario no existe',
        });
      }
      return res.status(HttpStatus.ACCEPTED).json({
        ok: true,
        responseDeletedUser,
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
