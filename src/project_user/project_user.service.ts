import { Injectable } from '@nestjs/common';
import { CreateProjectUserDto } from './dto/create-project_user.dto';
import { UpdateProjectUserDto } from './dto/update-project_user.dto';
import { ProjectUser } from './entities/project_user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from 'src/project/entities/project.entity';

@Injectable()
export class ProjectUserService {
  constructor(
    @InjectRepository(ProjectUser)
    private readonly projectUserRepository: Repository<ProjectUser>,
  ) {}

  async create(createProjectUserDto: CreateProjectUserDto) {
    try {
      const newProjectUser =
        await this.projectUserRepository.save(createProjectUserDto);
      return newProjectUser;
    } catch (error) {
      console.log(error);
    }
  }

  async findAll(project_id: Project) {
    try {
      return await this.projectUserRepository.find({
        where: { project_id, deletedAt: null },
      });
    } catch (error) {
      console.log(error);
    }
  }

  async findOne(id: number) {
    try {
      const projectUser = await this.projectUserRepository.findOne({
        where: { id },
      });
      if (!projectUser) {
        console.log('This project user id was not found.');
      }
      return projectUser;
    } catch (error) {
      console.log(error);
    }
  }

  async update(id: number, updateProjectUserDto: UpdateProjectUserDto) {
    try {
      const projectUser = await this.projectUserRepository.findOne({
        where: { id },
      });
      if (!projectUser) {
        console.log('This project user id was not found.');
      }
      Object.assign(projectUser, updateProjectUserDto);
      return await this.projectUserRepository.save(projectUser);
    } catch (error) {
      console.log(error);
    }
  }

  async remove(id: number) {
    try {
      const projectUser = await this.projectUserRepository.softDelete(id);
      if (projectUser.affected === 0) {
        console.log('This project user id was not found.');
      }
      return console.log('Project user deleted successfully.');
    } catch (error) {
      console.log(error);
    }
  }
}
