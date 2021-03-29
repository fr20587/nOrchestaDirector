// Nest Modules
import { Module } from '@nestjs/common';

// Modules
import { CityModule } from './city/city.module';
import { CountryModule } from './country/country.module';
import { StateModule } from './state/state.module';
import { GenderModule } from './gender/gender.module';
import { ServiceModule } from './service/service.module';

@Module({
  imports: [
    CityModule,
    CountryModule,
    StateModule,
    GenderModule,
    ServiceModule,
  ],
})
export class MiscModule {}
