import { Entity, Column, PrimaryGeneratedColumn, } from 'typeorm';

@Entity('user_bugs')
export class UserBug {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_task_id: number;

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

    @Column({ type:'longtext' })
    description: string; 

    @Column()
    bug_status_id: number;
}
