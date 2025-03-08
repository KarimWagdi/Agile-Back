import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsNumber } from "class-validator";
import { TaskStatus } from "../entities/project_task_status.entity";

export class CreateProjectTaskStatusDto {
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ example: 1, description: "ID of the project" })
    project_id: number;

    @IsEnum(TaskStatus)
    @IsNotEmpty()
    @ApiProperty({ example: TaskStatus.ToDo, description: "Status of the project task", enum: TaskStatus })
    status: TaskStatus;
}
