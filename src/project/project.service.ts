import { Injectable, Param } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from './entities/project.entity';
import { request } from 'http';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
        private readonly projectRepository: Repository<Project>,
  ){}
  async create(createProjectDto: CreateProjectDto) {
    try{
      const newProject = await this.projectRepository.save({...createProjectDto,});
      return 'This action adds a new project';
    }
    catch(error){
      console.log(error)
    }
  }

  findAll() {
    return `This action returns all project`;
  }

  findOne(id: number) {
    return `This action returns a #${id} project`;
  }

  async update(id: number, updateProjectDto: UpdateProjectDto) {
    try{
      return `This action updates a #${id} project`;
    }
    catch(error){
      console.log(error)
    }
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  }
}
