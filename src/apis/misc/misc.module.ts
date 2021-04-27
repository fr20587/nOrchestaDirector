// Nest Modules
import { Module } from '@nestjs/common';

// Modules
import { CityModule } from './city/city.module';
import { CountryModule } from './country/country.module';
import { GenderModule } from './gender/gender.module';
import { InversionModule } from './inversion/inversion.module';
import { TypePublicServiceModule } from './type-public-service/type-public-service.module';
import { ServiceModule } from './service/service.module';
import { StateModule } from './state/state.module';
import { TypeEquipmentModule } from './type-equipment/type-equipment.module';
import { TypePrevExpenseModule } from './type-prev-expense/type-prev-expense.module';

@Module({
  imports: [
    CityModule,
    CountryModule,
    GenderModule,
    InversionModule,
    TypePublicServiceModule,
    ServiceModule,
    StateModule,
    TypeEquipmentModule,
    TypePrevExpenseModule,
  ],
})
export class MiscModule {}
