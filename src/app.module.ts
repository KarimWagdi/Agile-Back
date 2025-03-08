import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { StoryModule } from './story/story.module';
import { Story } from './story/entities/story.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '#Adel2003botta',
      database: 'agile',
      entities: [User,Story],
      synchronize: true,
    }),
    UserModule,
    StoryModule,
  ]
})
export class AppModule {}
