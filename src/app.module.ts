import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './api/user/user.module';
import { Connection } from './bd/DBConecxion';
import { SalesModule } from './api/sales/sales.module';
import { DetailsModule } from './api/detais/details.module';
@Module({
  imports: [Connection,UserModule,SalesModule, DetailsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
