import { Injectable } from '@nestjs/common';
import { CreateProjectDepartmentDto } from './dto/create-project_department.dto';
import { UpdateProjectDepartmentDto } from './dto/update-project_department.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProjectDepartment } from './entities/project_department.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectDepartmentsService {
  constructor(
    @InjectRepository(ProjectDepartment)
    private readonly projectDepartmentRepository: Repository<ProjectDepartment>,
  ) {}
  async create(createProjectDepartmentDto: CreateProjectDepartmentDto) {
    try {
      const projectDepartment = this.projectDepartmentRepository.create(
        createProjectDepartmentDto,
      );
      return await this.projectDepartmentRepository.save(projectDepartment);
    } catch (error) {
      throw new error(error);
    }
  }

  async findAll() {
    try {
      const projectDepartments = await this.projectDepartmentRepository.find();
      return projectDepartments;
    } catch (error) {
      throw new error(error);
    }
  }

  async findOne(id: number) {
    try {
      const projectDepartment = await this.projectDepartmentRepository.findOne({
        where: { id },
      });
      if (!projectDepartment) {
        throw new Error('projectDepartment not found ');
      }
      return projectDepartment;
    } catch (error) {
      throw new error(error);
    }
  }

  async update(
    id: number,
    updateProjectDepartmentDto: UpdateProjectDepartmentDto,
  ) {
    try {
      const projectDepartment = await this.projectDepartmentRepository.findOne({
        where: { id },
      });
      if (!projectDepartment) {
        throw new Error('projectDepartment not found ');
      }
      return await this.projectDepartmentRepository.update(
        id,
        updateProjectDepartmentDto,
      );
    } catch (error) {
      throw new error(error);
    }
  }

  async remove(id: number) {
    try {
      const projectDepartment = await this.projectDepartmentRepository.findOne({
        where: { id },
      });
      if (!projectDepartment) {
        throw new Error('projectDepartment not found ');
      }
      const deletedProjectDepartment =
        await this.projectDepartmentRepository.softDelete(id);
      return deletedProjectDepartment;
    } catch (error) {
      throw new error(error);
    }
  }
}
