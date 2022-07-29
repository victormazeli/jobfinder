import { Module } from '@nestjs/common';
import { IndexController } from './controllers/index.controller';
import { TaskService } from './service/task/task.service';

@Module({
  providers: [TaskService, IndexController],
  controllers: [IndexController],
})
export class CoreModule {}
