import { ProjectTaskStatusController } from './project_task_status.controller';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { CreateProjectTaskStatusDto } from './dto/create-project_task_status.dto';
import { UpdateProjectTaskStatusDto } from './dto/update-project_task_status.dto';
import { ProjectTaskStatus } from './entities/project_task_status.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectTaskStatusService {
  constructor(
    @InjectRepository(ProjectTaskStatus)
    private readonly projectTaskStatusRepository: Repository<ProjectTaskStatus>,
  ){}
  async create(dto: CreateProjectTaskStatusDto) {
    try {
        return await this.projectTaskStatusRepository.save(dto);
    } catch (error) {
        console.log(error);
    }
}
async findAll() {
  return await this.projectTaskStatusRepository.find();
}


  findOne(id: number) {
    return `This action returns a #${id} projectTaskStatus`;
  }

  update(id: number, updateProjectTaskStatusDto: UpdateProjectTaskStatusDto) {
    return `This action updates a #${id} projectTaskStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} projectTaskStatus`;
  }
}
