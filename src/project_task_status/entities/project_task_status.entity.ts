import { Project } from './../../project/entities/project.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn, JoinColumn } from "typeorm";

export enum TaskStatus {
    Pending = 'pending',
    InProgress = 'in_progress',
    Completed = 'completed',
    OnHold = 'on_hold',
    Canceled = 'canceled'
}

@Entity()
export class ProjectTaskStatus {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(()=> Project, project => project.id)
     @JoinColumn({ name: "project_id"})
     project_id: Project;
    

    @Column({ type: 'enum', enum: TaskStatus, default: TaskStatus.Pending })
    status: string;

    @CreateDateColumn()
    createdAt: Date;
    
    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

   

}
