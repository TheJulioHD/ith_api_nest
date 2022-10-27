import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { detailsEntity } from './../../Entity/detais.entity';
import { sale } from 'src/Entity/sales.entity';
import { SalesServicesService } from 'src/services/sales-services/sales-services.service';
import { SalesController } from './sales.controller';
@Module({
    imports: [TypeOrmModule.forFeature([sale, detailsEntity])],
  controllers: [SalesController],
  providers: [SalesServicesService],
  exports:[TypeOrmModule]

})
export class SalesModule {}
