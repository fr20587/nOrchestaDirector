import { Module } from '@nestjs/common';
import { Tbl6Module } from '../tables/tbl6/tbl6.module';
import { Tbl7Module } from './tbl7/tbl7.module';

@Module({
  imports: [Tbl6Module, Tbl7Module],
})
export class TablesModule {}
