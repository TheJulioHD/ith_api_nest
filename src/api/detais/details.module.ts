import { detailsEntity } from './../../Entity/detais.entity'
import { DetaisController } from './detais.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetailsService } from 'src/services/details/details.service';

@Module({
    imports: [TypeOrmModule.forFeature([detailsEntity])],
  controllers: [DetaisController],
  providers: [DetailsService],
  exports:[TypeOrmModule]

})
export class DetailsModule {}
