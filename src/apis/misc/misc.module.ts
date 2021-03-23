// Nest Modules
import { Module } from '@nestjs/common';

// Modules
import { CityModule } from './city/city.module';
import { CountryModule } from './country/country.module';
import { StateModule } from './state/state.module';

@Module({
  imports: [CityModule, CountryModule, StateModule],
})
export class MiscModule {}
