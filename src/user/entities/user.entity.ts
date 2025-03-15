
import { Department } from "src/departments/entities/department.entity";
import { ProjectUser } from "src/project_user/entities/project_user.entity";

import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export enum UserGender {
  Male = 'male',
  Female = 'female',
}

export enum UserRole{
  Manager = 'manager',
  Developer = 'developer'
}
@Entity()
export class User {
    [x: string]: any;

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
    gender: UserGender;

    @Column()
    birth_date: Date;

    @Column({ default: false })
    is_active: boolean;

    @Column({ default: '' })
    profile: string;

    @Column()
    rate: number;

    @Column()
    accessToken: string;
    
    @Column({ type: 'enum', enum: UserRole, default: UserRole.Developer})
    role: UserRole;

    @CreateDateColumn()
    createdAt: Date;
    
    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

    @OneToMany(()=> ProjectUser, projectUser => projectUser.user_id)
    projectUsers: ProjectUser[];
}
