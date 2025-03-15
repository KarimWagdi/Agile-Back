
import { ProjectDepartment } from 'src/project_departments/entities/project_department.entity';
import { ProjectTaskStatus } from 'src/project_task_status/entities/project_task_status.entity';
import { ProjectUser } from 'src/project_user/entities/project_user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';


@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  start_date: Date;

  @Column()
  end_date: Date;

  @Column()
  client_id: number;


  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

 
  @OneToMany(() => ProjectUser, (projectUser) => projectUser.project_id)
  projectUsers: ProjectUser[];

  @OneToMany(
    () => ProjectTaskStatus,
    (projectTaskStatus) => projectTaskStatus.project_id,
  )
  projectTaskStatus: ProjectTaskStatus[];

  @OneToMany(
    () => ProjectDepartment,
    (project_department) => project_department.project_id,
  )
  project_department: ProjectDepartment[];

}
