// Nest Modules
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

// Mongoose Module
import { Model } from 'mongoose';

// DTO
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';

// Model
import { Contact } from './entities/contact.entity';

@Injectable()
export class ContactsService {
  constructor(
    @InjectModel('Contact') private readonly contactModel: Model<Contact>,
  ) {}

  // Crear Contacto
  public async create(createContactDto: CreateContactDto) {
    const existContact = await this.contactModel.findOne({
      name: createContactDto.name,
    });

    if (existContact) {
      return 'Ya existe un contacto con este nombre';
    } else {
      const contact = new this.contactModel(createContactDto);
      await contact.save();
      return contact;
    }
  }

  // Obtener todos los contactos
  public async findAll() {
    const contacts = await this.contactModel.find();
    return contacts;
  }

  // Obtener un contacto
  public async findOne(id: string) {
    const contact = await this.contactModel.findById(id);
    return contact;
  }

  // Actualizar contacto
  public async update(id: string, updateContactDto: UpdateContactDto) {
    const updatedContact = await this.contactModel.findByIdAndUpdate(
      id,
      updateContactDto,
      { new: true },
    );
    return updatedContact;
  }

  // Eliminar contacto
  public async remove(id: string) {
    await this.contactModel.findByIdAndDelete(id);
    return `Contacto eliminado correctamente`;
  }
}
