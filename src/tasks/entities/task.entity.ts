import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum Priority {
  low = 'low',
  medium = 'medium',
  high = 'high',
}
@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;
  // One to one relation with department, need to import the department and check for the reverse relation
  // @OneToOne(() => Department, (department) => department.id)
  // @JoinColumn({ name: 'department_id', referencedColumnName: 'id' })
  // department_id: Department;

  // One to one relation with UserStory, need to import the UserStory and check for the reverse relation
  // @OneToOne(() => UserStory, (userStory) => userStory.id)
  // @JoinColumn({ name: 'userStory_id', referencedColumnName: 'id' })
  // userStory_id: UserStory;

  //inverse relation with user_tasks needed

  @Column({ type: 'int', default: 0 })
  story_point: number;

  @Column({ type: 'double', default: 0 })
  working_hours: number;

  @Column({ type: 'enum', enum: Priority, default: Priority.low })
  priority: Priority;

  @Column({ type: 'varchar', length: 100, nullable: true })
  description: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  title: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  comment: string;

  @CreateDateColumn({ type: 'timestamp', precision: 6 })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updated_at: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deleted_at: Date;

}
