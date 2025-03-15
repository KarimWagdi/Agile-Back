import { JoinColumn } from 'typeorm';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Task } from '../entities/user-task.entity';
import { UserBug } from '../../user-bugs/entities/user-bug.entity'; 

@Entity('user_tasks')
export class UserTask {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  user_id: number;

  @ManyToOne(() => Task, task => task.id)
  @JoinColumn({ name: 'task_id' })
  task_id: Task;


  @Column()
  start_date: number;

  @Column()
  end_date: number;

  @Column()
  actual_working_time: number;

  @OneToMany(() => UserBug, userBug => userBug.userTask_id)
  userBugs: UserBug[];
}
