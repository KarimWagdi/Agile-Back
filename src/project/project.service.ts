import { Injectable, Param } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from './entities/project.entity';
import { request } from 'http';
import { error } from 'console';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
        private readonly projectRepository: Repository<Project>,
  ){}
  async create(createProjectDto: CreateProjectDto) {
    try{
      const newProject = await this.projectRepository.save({...createProjectDto,});
      return newProject;
    }
    catch(error){
      console.log(error)
    }
  }

  async findAll(){
    try{
      const projects = await this.projectRepository.find();
      return projects;
    }
    catch(error){
      console.log(error)
    }
  }

  async findOne(id: number){
    try{
      const project = await this.projectRepository.findOne({ where: { id } });

    if (!project) {
      throw new error(`Project with ID ${id} not found`);
    }else{
      return project;
    }
    }
    catch(error){
      console.log(error)
    }
  }

  async update(id: number, updateProjectDto: UpdateProjectDto) {
    try{
      const projectToUpdate = await this.projectRepository.findOne({ where: { id } });
      
      if (!projectToUpdate) {
        throw new error(`Project with ID ${id} not found`);
      }else{
      const updatedProject = await this.projectRepository.update(id, updateProjectDto)
      return updatedProject
      }
    }
    catch(error){
      console.log(error)
    }
  }

  async remove(id: number) {
    try{
    const projectToDelete = await this.projectRepository.findOne({ where: { id } });

    if (!projectToDelete) {
      throw new error(`Project with ID ${id} not found`);
    }
    else{
      await this.projectRepository.delete(id);
    }
    return `This action removes a #${id} project`;
  }
  catch(error){
    console.log(error);
  }
  }
}