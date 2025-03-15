import { ProjectTaskStatus } from './project_task_status/entities/project_task_status.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';

import { RateModule } from './rate/rate.module';
import { Rate } from './rate/entities/rate.entity';

import { UserBugsModule } from './user_bugs/user_bugs.module';
import { UserBug } from './user_bugs/entities/user_bug.entity';
import { ProjectTaskStatusModule } from './project_task_status/project_task_status.module';
import { StoryModule } from './story/story.module';
import { Story } from './story/entities/story.entity';
import { ProjectModule } from './project/project.module';
import { ProjectUserModule } from './project_user/project_user.module';
import { ProjectUser } from './project_user/entities/project_user.entity';
import { DepartmentsModule } from './departments/departments.module';
import { Department } from './departments/entities/department.entity';
import { TasksModule } from './tasks/tasks.module';
import { Task } from './tasks/entities/task.entity';
import { Project } from './project/entities/project.entity';

import { UserAttachmentModule } from './user-attachment/user-attachment.module';
import { UserModule } from './attatch/user/user.module';


import { ProjectDepartmentsModule } from './project_departments/project_departments.module';

import { UserTasksModule } from './user-tasks/user-tasks.module';

import * as dotenv from 'dotenv';
import { ProjectDepartment } from './project_departments/entities/project_department.entity';


dotenv.config();


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,  
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [
        User,
        ProjectTaskStatus,
        UserBug,
        Project,
        ProjectUser,
        Department,
        Task,
        Story,
        ProjectDepartment,

      ],
      synchronize: true,
    }),
    UserModule,
    RateModule,
    ProjectTaskStatusModule,
    UserBugsModule,
    ProjectModule,
    ProjectUserModule,
    DepartmentsModule,
    TasksModule,
    StoryModule,
    UserAttachmentModule,
    ProjectDepartmentsModule,
    UserTasksModule,

  ],
})
export class AppModule {}
