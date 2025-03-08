import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { RateModule } from './rate/rate.module';
import { Rate } from './rate/entities/rate.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Password@12345',
      database: 'agile',
      entities: [User, Rate],
      synchronize: true,
    }),
    UserModule,
    RateModule,
  ]
})
export class AppModule {}
