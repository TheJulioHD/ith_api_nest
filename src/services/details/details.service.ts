import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { detailsEntity } from 'src/Entity/detais.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DetailsService {

    constructor(
        @InjectRepository(detailsEntity)
        private detailsRepository: Repository<detailsEntity>,
      ) {}

      findAll(){
        return this.detailsRepository.find({
            relations:['idsale']
        })
        
      }
}
