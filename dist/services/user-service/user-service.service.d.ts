import { usermodel } from './../../models/User.model';
import { Repository } from 'typeorm';
import { User } from '../../Entity/user.entity';
export declare class UserServiceService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    private readonly Users;
    create(user: usermodel): Promise<import("typeorm").InsertResult>;
    getall(): usermodel[];
    getByEmail(correo: string): usermodel;
    updateUserById(id: number, user: usermodel): boolean;
    userExists(id: number): boolean;
}
