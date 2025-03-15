import { PartialType } from '@nestjs/swagger';
import { CreateUserBugDto } from './create-user_bug.dto';

export class UpdateUserBugDto extends PartialType(CreateUserBugDto) {}
