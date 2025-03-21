import { ApiProperty } from "@nestjs/swagger";
import {  IsEnum, IsNotEmpty,IsNumber,IsOptional, IsString,MaxLength,} from "class-validator";
import { AttachmentType } from "../entities/user-attach.entity";

export class CreateUserAttachDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ example: 1, description: "Attachment ID" })
  attach_id: number;

  @IsEnum(AttachmentType)
  @IsNotEmpty()
  @ApiProperty({
    example: AttachmentType.Document,
    description: "Type of the attachment",
    enum: AttachmentType,
  })
  type: AttachmentType;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  @ApiProperty({ example: "cv.pdf", description: "File name" })
  file_name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(500)
  @ApiProperty({ example: "/uploads/user123/cv.pdf", description: "File path" })
  file_path: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ example: 204800, description: "File size in bytes" })
  file_size: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  @ApiProperty({ example: "application/pdf", description: "MIME type of the file" })
  mime_type: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: "/uploads/birth-cert.pdf", required: false })
  birth_certificate?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: "/uploads/military-cert.pdf", required: false })
  military_certificate?: string;

  @IsString()
  @IsOptional()
  @MaxLength(20)
  @ApiProperty({ example: "29876543210987", required: false })
  national_id?: string;

  @IsString()
  @IsOptional()
  @MaxLength(50)
  @ApiProperty({ example: "DE89370400440532013000", required: false })
  bank_account?: string;

  @IsString()
  @IsOptional()
  @MaxLength(500)
  @ApiProperty({ example: "123 Street Name, City, Country", required: false })
  address?: string;
}
