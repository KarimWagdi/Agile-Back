import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProjectDepartmentsService } from './project_departments.service';
import { CreateProjectDepartmentDto } from './dto/create-project_department.dto';
import { UpdateProjectDepartmentDto } from './dto/update-project_department.dto';

@Controller('project-departments')
export class ProjectDepartmentsController {
  constructor(private readonly projectDepartmentsService: ProjectDepartmentsService) {}

  @Post()
  create(@Body() createProjectDepartmentDto: CreateProjectDepartmentDto) {
    return this.projectDepartmentsService.create(createProjectDepartmentDto);
  }

  @Get()
  findAll() {
    return this.projectDepartmentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectDepartmentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjectDepartmentDto: UpdateProjectDepartmentDto) {
    return this.projectDepartmentsService.update(+id, updateProjectDepartmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectDepartmentsService.remove(+id);
  }
}
