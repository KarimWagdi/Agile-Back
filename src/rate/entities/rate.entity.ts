import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity()
export class Rate {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: number;
    
    @Column()
    rate: number;
    
    @Column()
    month: Date;
    
    @Column()
    year: Date;
    
    @CreateDateColumn()
    createdAt: Date;
    
    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}
