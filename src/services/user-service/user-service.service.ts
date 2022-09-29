import { usermodel } from './../../models/User.model';

import { Injectable } from '@nestjs/common';

@Injectable()
export class UserServiceService {
    private readonly Users:usermodel[]=[];
    
    create(user : usermodel){
        this.Users.push(user);
        
    } 

    getall(): usermodel[]{
        return this.Users;
    }
    getByEmail(correo : string) : usermodel{
        return this.Users.find( (user) => user.email === correo )
    }


}
