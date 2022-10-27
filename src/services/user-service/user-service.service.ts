import { usermodel } from './../../models/User.model';

import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../Entity/user.entity';

@Injectable()
export class UserServiceService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
      ) {}
      
    private readonly Users:usermodel[]=[];
    
    
   async create(user : usermodel){
        // this.Users.push(user);
        return await this.usersRepository.insert(user); 
      
        
    } 

    getall(): usermodel[]{
        return this.Users;
    }
    getByEmail(correo : string) : usermodel{
        return this.Users.find( (user) => user.email === correo )
    }

    updateUserById(id : number, user : usermodel) : boolean{
      let user_index = this.Users.findIndex( (user) => user.id === id )
      if( this.userExists(id) ){
          //mantener los datos que no se van a actualizar
          const new_user = Object.assign(this.Users[user_index], user)
          this.Users[user_index] = new_user
          return true
      }
      return false
    }

     /**
     * @description Esta funcion verifica si un usuario existe o no.
     * @param id id del usuario que queremos verificar si existe
     * @returns true si el usuario existe o false si no existe
     */
      userExists(id : number) : boolean{
        const index = this.Users.findIndex( usuario => usuario.id === id)
        return index !== -1
    }
}
