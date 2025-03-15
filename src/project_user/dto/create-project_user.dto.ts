import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateProjectUserDto {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ example: 1, description: 'project_id' })
  project_id: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ example: 1, description: 'user_id' })
  user_id: number;
}
