import { isales } from './../../models/sales';
import { detailsEntity } from './../../Entity/detais.entity';
import { sale } from 'src/Entity/sales.entity';
import { Repository } from 'typeorm';
export declare class SalesServicesService {
    private salesRepository;
    private detailsRepository;
    constructor(salesRepository: Repository<sale>, detailsRepository: Repository<detailsEntity>);
    create(sales: isales): Promise<void>;
}
