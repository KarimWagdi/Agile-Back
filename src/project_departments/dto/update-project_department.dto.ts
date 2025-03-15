import { PartialType } from '@nestjs/swagger';
import { CreateProjectDepartmentDto } from './create-project_department.dto';

export class UpdateProjectDepartmentDto extends PartialType(CreateProjectDepartmentDto) {}
