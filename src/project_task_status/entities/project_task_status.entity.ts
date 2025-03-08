import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export enum TaskStatus {
    ToDo = 'to_do',
    InProgress = 'in_progress',
    Completed = 'completed',
  
}

@Entity()
export class ProjectTaskStatus {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    project_id: number;

    @Column({ type: 'enum', enum: TaskStatus, default: TaskStatus.ToDo })
    status: string;

    @CreateDateColumn()
    createdAt: Date;
    
    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}
