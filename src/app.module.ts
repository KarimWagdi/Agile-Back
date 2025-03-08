import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';

import { ProjectUserModule } from './project_user/project_user.module';
import { ProjectUser } from './project_user/entities/project_user.entity';
import { DepartmentsModule } from './departments/departments.module';
import { Department } from './departments/entities/department.entity';

import { TasksModule } from './tasks/tasks.module';
import { Task } from './tasks/entities/task.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '852654As',
      database: 'agile',

      entities: [User, ProjectUser, Department],
      synchronize: true,
    }),
    UserModule,
    ProjectUserModule,
    DepartmentsModule,
    TasksModule,
  ],

})
export class AppModule {}
