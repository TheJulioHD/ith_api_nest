import { usermodel } from '../../models/User.model';
import { Body, Controller, Post,Param, Get, Put } from '@nestjs/common';
import { UserServiceService } from 'src/services/user-service/user-service.service';


@Controller('user')
export class UserController {
    constructor(private usersarvice: UserServiceService){}
     
    @Post()
    create(@Body()params:usermodel): string | boolean{
        if(this.usersarvice.userExists(Number(params.id))){
            return "El usuario ya existe"
        }
        try {
            this.usersarvice.create(params)
            return true
        } catch (error) {
            console.log({error})
        }
    }

    @Get('/all')
    getUsers(): usermodel[]{
        return this.usersarvice.getall()
    }

    @Get('/:email')
    getUser(@Param('email') param) : usermodel | string{
        const user = this.usersarvice.getByEmail(param)
        
        return user ??  "el usuario no existe"
        
    
    }
    
    @Put('/update/:id')
    actualizartUsuario(@Body() user : usermodel, @Param('id') id){
        return this.usersarvice.updateUserById(Number(id), user)
    }
    
}
