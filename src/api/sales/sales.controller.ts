import { isales } from './../../models/sales';
import { SalesServicesService } from './../../services/sales-services/sales-services.service';
import { Controller, Post, Body } from '@nestjs/common';

@Controller('sales')
export class SalesController {
    constructor(private saleService: SalesServicesService){}

    @Post()
    create(@Body()params: isales){
        try {
            this.saleService.create(params)
        } catch (error) {
            console.log(error)
        }
    }
}
