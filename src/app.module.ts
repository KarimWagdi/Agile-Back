import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { UserBugsModule } from './user_bugs/user_bugs.module';
import { UserBug } from './user_bugs/entities/user_bug.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Password@12345',
      database: 'agile',
      entities: [User , UserBug],
      synchronize: true,
    }),
    UserModule,
    UserBugsModule,
  ]
})
export class AppModule {}
