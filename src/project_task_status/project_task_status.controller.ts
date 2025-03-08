import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProjectTaskStatusService } from './project_task_status.service';
import { CreateProjectTaskStatusDto } from './dto/create-project_task_status.dto';
import { UpdateProjectTaskStatusDto } from './dto/update-project_task_status.dto';

@Controller('project-task-status')
export class ProjectTaskStatusController {
  constructor(private readonly projectTaskStatusService: ProjectTaskStatusService) {}

  @Post()
  create(@Body() createProjectTaskStatusDto: CreateProjectTaskStatusDto) {
    return this.projectTaskStatusService.create(createProjectTaskStatusDto);
  }

  @Get()
  findAll() {
    return this.projectTaskStatusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectTaskStatusService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjectTaskStatusDto: UpdateProjectTaskStatusDto) {
    return this.projectTaskStatusService.update(+id, updateProjectTaskStatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectTaskStatusService.remove(+id);
  }
}
