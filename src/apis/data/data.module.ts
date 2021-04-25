// Nest Modules
import { Module } from '@nestjs/common';

// Modules
import { PosModule } from './pr-pos/pos.module';
import { RawMaterialModule } from './pr-raw-material/raw-material.module';
import { PrPublicServiceModule } from './pr-public-service/pr-public-service.module';
import { PrEquipmentModule } from './pr-equipment/pr-equipment.module';
import { PrFurnitureModule } from './pr-furniture/pr-furniture.module';
import { PrOfficeItemModule } from './pr-office-item/pr-office-item.module';
import { PrComputerEquipmentModule } from './pr-computer-equipment/pr-computer-equipment.module';
import { PrConstructionModule } from './pr-construction/pr-construction.module';
import { PrAnimalModule } from './pr-animal/pr-animal.module';
import { PrPlantationModule } from './pr-plantation/pr-plantation.module';
import { PrIidModule } from './pr-iid/pr-iid.module';
import { PrIiiModule } from './pr-iii/pr-iii.module';
import { PrRealRightModule } from './pr-real-right/pr-real-right.module';
import { PrOtherAssetModule } from './pr-other-asset/pr-other-asset.module';
import { PrPrevExpenseModule } from './pr-prev-expense/pr-prev-expense.module';
import { PrConstructionObjectModule } from './pr-construction-object/pr-construction-object.module';
import { PrConstructionTaskModule } from './pr-construction-task/pr-construction-task.module';

@Module({
  imports: [
    PosModule,
    RawMaterialModule,
    PrPublicServiceModule,
    PrEquipmentModule,
    PrFurnitureModule,
    PrOfficeItemModule,
    PrComputerEquipmentModule,
    PrConstructionModule,
    PrAnimalModule,
    PrPlantationModule,
    PrIidModule,
    PrIiiModule,
    PrRealRightModule,
    PrOtherAssetModule,
    PrPrevExpenseModule,
    PrConstructionObjectModule,
    PrConstructionTaskModule,
  ],
})
export class DataModule {}
