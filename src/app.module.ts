import { ProjectTaskStatus } from './project_task_status/entities/project_task_status.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
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



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Password@12345',
      database: 'agile',
      entities: [User, ProjectTaskStatus, UserBug, Project, ProjectUser, Department, Task, Story],
      synchronize: true,
    }),
    UserModule,
    ProjectTaskStatusModule,
    UserBugsModule,
    ProjectModule,
    ProjectUserModule,
    DepartmentsModule,
    TasksModule,
    StoryModule,
  ],


})
export class AppModule {}
