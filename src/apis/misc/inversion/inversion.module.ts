// NestJS Module
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// Service
import { InversionService } from './inversion.service';

// Controllers
import { InversionController } from './inversion.controller';

// Schema
import { InversionSchema } from './schema/inversion.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Inversion', schema: InversionSchema }]),
  ],
  controllers: [InversionController],
  providers: [InversionService]
})
export class InversionModule {}
