import { usermodel } from './../../models/User.model';
import { UserServiceService } from 'src/services/user-service/user-service.service';
export declare class UserController {
    private usersarvice;
    constructor(usersarvice: UserServiceService);
    create(params: usermodel): string | boolean;
    getUsers(): usermodel[];
    getUser(param: any): usermodel | string;
    actualizartUsuario(user: usermodel, id: any): boolean;
}
