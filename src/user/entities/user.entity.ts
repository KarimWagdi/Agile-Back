import { Department } from "src/departments/entities/department.entity";
import { ProjectUser } from "src/project_user/entities/project_user.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export enum UserGender{
    Male = 'male',
    Female = 'female',
}

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(()=> Department, department => department.id)
    @JoinColumn({ name: "department_id"})
    department_id: Department;
    
    @Column()
    username: string;
    
    @Column()
    password: string;
    
    @Column()
    email: string;
    
    @Column({type: 'enum', enum:UserGender, default:UserGender.Male})
    gender: string;

    @Column()
    birth_date: Date;

    @Column({ default: false })
    is_active: boolean;

    @Column({ default: '' })
    profile: string;

    @Column()
    rate: number;

    @CreateDateColumn()
    createdAt: Date;
    
    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

    @OneToMany(()=> ProjectUser, projectUser => projectUser.user_id)
    projectUsers: ProjectUser[];

    
}
