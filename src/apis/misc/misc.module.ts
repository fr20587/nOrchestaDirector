// Nest Modules
import { Module } from '@nestjs/common';

// Modules
import { CityModule } from './city/city.module';
import { CountryModule } from './country/country.module';
import { GenderModule } from './gender/gender.module';
import { InversionModule } from './inversion/inversion.module';
import { PublicServiceModule } from './public-service/public-service.module';
import { ServiceModule } from './service/service.module';
import { StateModule } from './state/state.module';

@Module({
  imports: [
    CityModule,
    CountryModule,
    GenderModule,
    InversionModule,
    PublicServiceModule,
    ServiceModule,
    StateModule,
  ],
})
export class MiscModule {}
