import { PartialType } from '@nestjs/swagger';
import { CreateProjectUserDto } from './create-project_user.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional } from 'class-validator';

export class UpdateProjectUserDto extends PartialType(CreateProjectUserDto) {
  @IsOptional()
  @IsNumber()
  @ApiProperty({ example: 1, description: 'Updated project_id' })
  project_id?: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ example: 1, description: 'Updated user_id' })
  user_id?: number;
}
