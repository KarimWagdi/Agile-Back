import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { error } from 'console';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly tasksRepository: Repository<Task>,
  ) {}
  async create(createTaskDto: CreateTaskDto) {
    try {
      const newTask = await this.tasksRepository.save(createTaskDto);
      return newTask;
    } catch (error) {
      return error;
    }
  }

  async findAll() {
    try {
      const tasks = await this.tasksRepository.find();
      return tasks;
    } catch (error) {
      return error;
    }
  }

  async findOne(id: number) {
    try {
      const task = await this.tasksRepository.findOne({ where: { id } });
      if (!task) {
        throw new error('task not found ');
      }
      return task;
    } catch (error) {
      return error;
    }
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    try {
      const task = await this.tasksRepository.findOne({ where: { id } });
      if (!task) {
        throw new error('task not found ');
      }
      const updatedTask = await this.tasksRepository.update(id, updateTaskDto);
      return updatedTask;
    } catch (error) {
      return error;
    }
  }

  async remove(id: number) {
    try {
      const task = await this.tasksRepository.findOne({ where: { id } });
      if (!task) {
        throw new error('task not found ');
      }
      const deletedTask = this.tasksRepository.softDelete(id);
      return deletedTask;
    } catch (error) {
      return error;
    }
  }
}
