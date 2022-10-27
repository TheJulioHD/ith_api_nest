import { detailsEntity } from 'src/Entity/detais.entity';
import { Repository } from 'typeorm';
export declare class DetailsService {
    private detailsRepository;
    constructor(detailsRepository: Repository<detailsEntity>);
    findALL(): Promise<detailsEntity[]>;
}
