import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsNumber } from 'class-validator';
import { Department } from 'src/departments/entities/department.entity';
import { Project } from 'src/project/entities/project.entity';

export class CreateProjectDepartmentDto {
  @IsNotEmpty()
  @IsInt()
  @ApiProperty({ example: 1, description: 'department_id' })
  department_id: Department;

  @IsNotEmpty()
  @IsInt()
  @ApiProperty({ example: 1, description: 'project_id' })
  project_id: Project;
}
