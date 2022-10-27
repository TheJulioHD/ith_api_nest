import { isales } from './../../models/sales';
import { SalesServicesService } from './../../services/sales-services/sales-services.service';
export declare class SalesController {
    private saleService;
    constructor(saleService: SalesServicesService);
    create(params: isales): void;
}
