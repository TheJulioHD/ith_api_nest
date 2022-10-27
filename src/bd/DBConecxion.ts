import { TypeOrmModule } from '@nestjs/typeorm';
import { sale } from 'src/Entity/sales.entity';
import { detailsEntity } from '../Entity/detais.entity';
import { User } from '../Entity/user.entity';

export const Connection = TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'ith-db-v2',
    entities: [User, sale, detailsEntity],
    synchronize: true,
  })