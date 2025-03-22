import { Department } from 'src/departments/entities/department.entity';
import { Project } from 'src/project/entities/project.entity';

import {
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';


@Entity()
export class ProjectDepartment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Department, (department) => department.id)
  @JoinColumn({ name: 'department_id', referencedColumnName: 'id' })
  department_id: Department;

  @ManyToOne(() => Project, (project) => project.id)
  @JoinColumn({ name: 'project_id', referencedColumnName: 'id' })
  project_id: Project;
  
  @CreateDateColumn({ type: 'timestamp', precision: 6 })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updated_at: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deleted_at: Date;

}
