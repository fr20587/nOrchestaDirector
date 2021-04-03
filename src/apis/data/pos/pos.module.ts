// NestJS Module
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// Service
import { PosService } from './pos.service';

// Controller
import { PosController } from './pos.controller';

// Schema
import { PosSchema } from './schema/pos.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Pos', schema: PosSchema }])],
  controllers: [PosController],
  providers: [PosService],
})
export class PosModule {}
