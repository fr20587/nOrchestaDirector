// NestJS Module
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// Service
import { StateService } from './state.service';

// Controller
import { StateController } from './state.controller';

// Schema
import { StateSchema } from './schema/state.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'State', schema: StateSchema }]),
  ],
  controllers: [StateController],
  providers: [StateService],
})
export class StateModule {}
