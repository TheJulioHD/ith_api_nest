import { DetailsService } from 'src/services/details/details.service';
export declare class DetaisController {
    private detaiservice;
    constructor(detaiservice: DetailsService);
    findAll(): Promise<import("../../Entity/detais.entity").detailsEntity[]>;
}
