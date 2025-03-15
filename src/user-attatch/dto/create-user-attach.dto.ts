import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsEmail, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { UserAttach } from "../entities/user-attach.entity";


export class CreateUserAttachDto {
@IsNotEmpty()
    @IsNumber()
    @ApiProperty({example: 1, description: "attach_id" })
    attach_id:  number;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: "John Doe", description: " file_name" })
    file_name: string;

    @IsEmail()
    @IsNotEmpty()
    @ApiProperty({ example: "#", description: "file_size" })
    file_size: number;
 
}