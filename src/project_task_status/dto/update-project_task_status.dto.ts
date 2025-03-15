import { PartialType } from '@nestjs/swagger';
import { CreateProjectTaskStatusDto } from './create-project_task_status.dto';

export class UpdateProjectTaskStatusDto extends PartialType(CreateProjectTaskStatusDto) {}
