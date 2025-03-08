import { type } from "os";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Task } from "src/tasks/entities/task.entity";

@Entity()
export class Story {
    @PrimaryGeneratedColumn()
    id: number;
   
    @Column()
    title:string;

     @Column()
     description: string;
   
     @Column()
      story_point: string;
    
      @Column()
        priority: number;
        
       @CreateDateColumn()
        createdAt: Date;
       
       @UpdateDateColumn()
       updatedAt: Date;
    
      @DeleteDateColumn()
      deletedAt: Date;
       
      @OneToMany(() => Task, (task) => task.userStory_id)
        tasks: Task[];
}