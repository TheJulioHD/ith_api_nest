import { Body, Controller, Post } from '@nestjs/common';
import { usermodel } from './models/User.model';

@Controller('user')
export class UserController {
    constructor(){}

    @Post()
    create(@Body()params:usermodel):void{
        console.log('the name is: '+params.name,'\n the email is: '+ params.email,'\n the phone is: '+ params.cel);
    }
    
}

