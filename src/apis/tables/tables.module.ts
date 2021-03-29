import { Module } from '@nestjs/common';
import { Tbl6Module } from './tbl6/tbl6.module';

@Module({
  imports: [Tbl6Module]
})
export class TablesModule {}
