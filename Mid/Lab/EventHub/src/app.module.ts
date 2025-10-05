
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerModule } from './Customer/customer.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1234',
  database: 'eventhub_database',
  entities: [__dirname + '/**/*.entity{.ts,.js}'], 
  synchronize:true,
}),
    CustomerModule,
  ],
})
export class AppModule{}
