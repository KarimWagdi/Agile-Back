import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Message {
    @PrimaryGeneratedColumn()
    id: number

    // @Column()
    // sender_id:number

    // @Column()
    // receiver_id: number

    // @Column()
    // project_id: number

    // @Column()
    // message:string

    @Column()
    text:string

    @Column()
    sender: string
    
    @CreateDateColumn()
    createdAt:Date
}
