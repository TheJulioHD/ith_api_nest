import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/Entity/user.entity';
import { UserServiceService} from 'src/services/user-service/user-service.service'
import { UserController} from 'src/api/user/user.controller'
@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [UserController],
    providers: [ UserServiceService],
    exports:[TypeOrmModule]
  })
export class UserModule {}
