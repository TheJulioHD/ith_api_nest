import { usermodel } from './../../models/User.model';
import { Body, Controller, Post,Param, Get } from '@nestjs/common';
import { UserServiceService } from 'src/services/user-service/user-service.service';


@Controller('user')
export class UserController {
    constructor(private usersarvice: UserServiceService){}
     
    @Post()
    create(@Body()params:usermodel):void{
        this.usersarvice.create(params)
    }

    @Get('/all')
    getUsers(): usermodel[]{
        return this.usersarvice.getall()
    }

    @Get('/:email')
    getUser(@Param('email') param) : usermodel{
        
        return this.validateQuest(this.usersarvice.getByEmail(param))
            
        
        
    }

    validateQuest(request: usermodel){
        if (request != undefined) {
            return request;
        } else {
            console.error('El Usuario no existe');
            
        } 
    }
    
}
