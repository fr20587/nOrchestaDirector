// Nest Modules
import { Module } from '@nestjs/common';

// Modules
import { CompaniesModule } from './companies/companies.module';
import { ContactsModule } from './contacts/contacts.module';

@Module({
  imports: [CompaniesModule, ContactsModule],
  exports: [CompaniesModule, ContactsModule]
})
export class ClientsModule {}
