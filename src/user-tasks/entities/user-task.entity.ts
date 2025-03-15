import { Task } from 'src/tasks/entities/task.entity';
import { User } from 'src/user/entities/user.entity';
import { UserBug } from 'src/user_bugs/entities/user_bug.entity';
import { JoinColumn } from 'typeorm';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';

@Entity('user_tasks')
export class UserTask {
  @PrimaryGeneratedColumn()
  id: number;
  
  @OneToMany(() => User, user => user.id)
  @JoinColumn({ name: 'user_id' })
  user_id: User;

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
