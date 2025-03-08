import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsNumber } from "class-validator";
import { TaskStatus } from "../entities/project_task_status.entity";
import { Project } from "src/project/entities/project.entity";

export class CreateProjectTaskStatusDto {
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ example: 1, description: "ID of the project" })
    project_id: Project;

    @IsEnum(TaskStatus)
    @IsNotEmpty()
    @ApiProperty({ example: TaskStatus.Pending, description: "Status of the project task", enum: TaskStatus })
    status: TaskStatus;
}
