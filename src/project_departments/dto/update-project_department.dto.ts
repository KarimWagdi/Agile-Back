import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateProjectDepartmentDto } from './create-project_department.dto';
import { IsNotEmpty, IsInt } from 'class-validator';
import { Department } from 'src/departments/entities/department.entity';
import { Project } from 'src/project/entities/project.entity';

export class UpdateProjectDepartmentDto extends PartialType(CreateProjectDepartmentDto) {
    @IsNotEmpty()
    @IsInt()
    @ApiProperty({ example: 1, description: 'department_id' })
    department_id: Department;
    
    @IsNotEmpty()
    @IsInt()
    @ApiProperty({ example: 1, description: 'project_id' })
    project_id: Project;
}
