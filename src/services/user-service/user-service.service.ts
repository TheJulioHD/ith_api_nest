import { usermodel } from './../../models/User.model';

import { Injectable } from '@nestjs/common';

@Injectable()
export class UserServiceService {
    private readonly Users:usermodel[]=[];
    
    
    create(user : usermodel){
        this.Users.push(user);
       let p = user;
        
    } 

    getall(): usermodel[]{
        return this.Users;
    }
    getByEmail(correo : string) : usermodel{
        return this.Users.find( (user) => user.email === correo )
    }

    updateUserById(id : number, user : usermodel) : boolean{
        let user_index = this.Users.findIndex( (user) => user.id === id )
        const useranterior = this.Users[user_index]
        if(user_index !== -1){
            //mantener los datos que no se van a actualizar
            this.Users[user_index] = {
                id : user.id,
                name : user.name,
                email : user.email,
                cel : user.cel
            }
            this.checkuser(useranterior, user_index);
            return true
        }
        return false
    }

    checkuser(useranterior:usermodel, user_index:number){
        if(this.Users[user_index].id=== undefined){
            this.Users[user_index].id= useranterior.id
        }
        if(this.Users[user_index].name=== undefined){
            this.Users[user_index].name= useranterior.name
        }
        if(this.Users[user_index].email=== undefined){
            this.Users[user_index].email= useranterior.email
        }
        if(this.Users[user_index].cel=== undefined){
            this.Users[user_index].cel= useranterior.cel
        }
    }

}
