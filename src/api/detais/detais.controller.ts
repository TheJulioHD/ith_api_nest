import { Controller, Get } from '@nestjs/common';
import { DetailsService } from 'src/services/details/details.service';

@Controller('detais')
export class DetaisController {
    constructor(private detaiservice: DetailsService){}
    @Get()
    findAll(){
        return this.detaiservice.findAll();
    }
}
