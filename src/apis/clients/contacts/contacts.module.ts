// NestJS Module
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// Service
import { ContactsService } from './contacts.service';

// Controller
import { ContactsController } from './contacts.controller';

// Schema
import { ContactSchema } from './schema/contact.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Contact', schema: ContactSchema }]),
  ],
  controllers: [ContactsController],
  providers: [ContactsService]
})
export class ContactsModule {}
