import { type } from "os";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


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
}