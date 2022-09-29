import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './users/user/user.controller';
import { UserServiceService } from './services/user-service/user-service.service';

@Module({
  imports: [],
  controllers: [AppController, UserController],
  providers: [AppService, UserServiceService],
})
export class AppModule {}
