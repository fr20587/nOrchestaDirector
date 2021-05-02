// Nest Modules
import { Module } from '@nestjs/common';

// Modules
import { PosModule } from './pr-pos/pos.module';
import { PrAnimalModule } from './pr-animal/pr-animal.module';
import { PrComputerEquipmentModule } from './pr-computer-equipment/pr-computer-equipment.module';
import { PrConstructionModule } from './pr-construction/pr-construction.module';
import { PrConstructionObjectModule } from './pr-construction-object/pr-construction-object.module';
import { PrConstructionTaskModule } from './pr-construction-task/pr-construction-task.module';
import { PrEquipmentModule } from './pr-equipment/pr-equipment.module';
import { PrFurnitureModule } from './pr-furniture/pr-furniture.module';
import { PrIidModule } from './pr-iid/pr-iid.module';
import { PrIiiModule } from './pr-iii/pr-iii.module';
import { PrOfficeItemModule } from './pr-office-item/pr-office-item.module';
import { PrOtherAssetModule } from './pr-other-asset/pr-other-asset.module';
import { PrPlantationModule } from './pr-plantation/pr-plantation.module';
import { PrPrevExpenseModule } from './pr-prev-expense/pr-prev-expense.module';
import { PrProductivityModule } from './pr-productivity/pr-productivity.module';
import { PrPublicServiceModule } from './pr-public-service/pr-public-service.module';
import { PrRawMaterialModule } from './pr-raw-material/pr-raw-material.module';
import { PrRealRightModule } from './pr-real-right/pr-real-right.module';

@Module({
  imports: [
    PosModule,
    PrAnimalModule,
    PrComputerEquipmentModule,
    PrConstructionModule,
    PrConstructionObjectModule,
    PrConstructionTaskModule,
    PrEquipmentModule,
    PrFurnitureModule,
    PrIidModule,
    PrIiiModule,
    PrOfficeItemModule,
    PrOtherAssetModule,
    PrPlantationModule,
    PrPrevExpenseModule,
    PrProductivityModule,
    PrPublicServiceModule,
    PrRawMaterialModule,
    PrRealRightModule,
  ],
})
export class DataModule {}
