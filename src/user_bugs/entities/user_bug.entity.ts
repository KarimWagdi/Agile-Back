import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';
import { Task } from 'src/tasks/entities/task.entity';

@Entity('user_bugs')
export class UserBug {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    story_point: number;

    @Column()
    working_hours: number;

    @Column()
    priority: number;

    @Column()
    title: string;

    @Column()
    comment: string;

    @Column({ type: 'longtext' })
    description: string; 

    @Column({ nullable: true }) 
    bug_status_id: number;

    @CreateDateColumn()
        createdAt: Date;
        
    @UpdateDateColumn()
        updatedAt: Date;
    
    @DeleteDateColumn()
        deletedAt: Date;

    @ManyToOne(() => Task, (userTask) => userTask.id)
    userTask_id: Task;
}
