import { ProjectTaskStatus } from './project_task_status/entities/project_task_status.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { ProjectTaskStatusModule } from './project_task_status/project_task_status.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Password@123',
      database: 'agile',
      entities: [User, ProjectTaskStatus],
      synchronize: true,
    }),
    UserModule,
    ProjectTaskStatusModule,
  ]
})
export class AppModule {}
