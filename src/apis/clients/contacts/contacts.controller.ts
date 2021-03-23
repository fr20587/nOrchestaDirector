// Nest Modules
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

// Service
import { ContactsService } from './contacts.service';

// DTO
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  // Crear contacto
  @Post('/')
  public async create(@Res() res, @Body() createContactDto: CreateContactDto) {
    try {
      const contact = await this.contactsService.create(createContactDto);
      if (contact === 'Ya existe un contacto con este nombre') {
        return res.status(HttpStatus.CONFLICT).json({
          ok: false,
          contact,
        });
      } else {
        return res.status(HttpStatus.CREATED).json({
          ok: true,
          message: 'Empresa creada correctamente',
          contact,
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

  // Obtener todos los contactos
  @Get('/')
  public async findAll(@Res() res) {
    try {
      const contacts = await this.contactsService.findAll();
      return res.status(HttpStatus.OK).json({
        ok: true,
        contacts,
      });
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error inesperado.',
      });
    }
  }

  // Obtener un contacto
  @Get(':id')
  public async findOne(@Res() res, @Param('id') id: string) {
    try {
      const contacts = await this.contactsService.findOne(id);
      if (!contacts) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'La empresa no existe',
        });
      } else {
        return res.status(HttpStatus.OK).json({
          ok: true,
          contacts,
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

  // Actualizar contacto
  @Put(':id')
  public async update(
    @Res() res,
    @Param('id') id: string,
    @Body() updateContactDto: UpdateContactDto,
  ) {
    try {
      const updatedContact = await this.contactsService.update(
        id,
        updateContactDto,
      );

      if (!updatedContact) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'EL contacto no existe',
        });
      } else {
        return res.status(HttpStatus.OK).json({
          ok: true,
          message: 'Contacto actualizado correctamente',
          updatedContact,
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

  // Eliminar contacto
  @Delete(':id')
  public async remove(@Res() res, @Param('id') id: string) {
    try {
      const responseDeleteContact = await this.contactsService.remove(id);
      if (!responseDeleteContact) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'El contacto no existe',
        });
      } else {
        return res.status(HttpStatus.ACCEPTED).json({
          ok: true,
          responseDeleteContact,
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
