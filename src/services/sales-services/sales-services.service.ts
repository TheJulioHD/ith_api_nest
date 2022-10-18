import { isales } from './../../models/sales';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { detailsEntity } from './../../Entity/detais.entity';
import { sale } from 'src/Entity/sales.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SalesServicesService {
    constructor(
        @InjectRepository(sale) private salesRepository: Repository<sale>,
        @InjectRepository(detailsEntity) private detailsRepository: Repository<detailsEntity>,
      ) {}

      async create(sales:isales){
        const date = new Date();
        const details = new detailsEntity();
        let total = 0;
        sales.details.forEach(element => {
            total = total + ( element.quantity * element.unit_price )
            details.product = element.product
            details.quantity = element.quantity
            details.unit_price = element.unit_price
          });
          const newSale = await this.salesRepository.save({
            id_user:sales.id_user,
            date: date,
            total,
            
          });
          details.idsale = newSale;
        return this.detailsRepository.insert(details);
      }
}
