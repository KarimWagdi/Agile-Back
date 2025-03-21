
import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export enum AttachmentType {
  ProfilePicture = 'profile_picture',
  Document = 'document',
  BirthCertificate = 'birth_certificate',
  MilitaryCertificate = 'military_certificate',
  NationalID = 'national_id',
  BankAccount = 'bank_account',
  AddressProof = 'address_proof',
  Other = 'other',
}

@Entity('user_attachments') 
export class UserAttach {
  @PrimaryGeneratedColumn()
  attach_id: number;

  @ManyToOne(() => User, user => user.id)
  @JoinColumn({ name: "user_id" })
  user: User;

  @Column({ type: 'enum', enum: AttachmentType, default: AttachmentType.Other })
  type: AttachmentType;

  @Column({ length: 255 }) 
  file_name: string;

  @Column({ length: 500 }) 
  file_path: string;

  @Column({ type: 'bigint' })
  file_size: number;

  @Column({ length: 100 }) 
  mime_type: string; 

  @Column({ nullable: true })
  birth_certificate: string; 

  @Column({ nullable: true })
  military_certificate: string; 
  @Column({ nullable: true, length: 20 })
  national_id: number; // National ID Number

  @Column({ nullable: true, length: 50 })
  bank_account: number; // Bank Account Number

  @Column({ nullable: true, length: 500 })
  address: string; 

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deletedAt: Date;
}
