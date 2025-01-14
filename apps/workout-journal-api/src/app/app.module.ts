import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExercisesModule } from '../exercises/exercises.module';
import { DatabaseModule } from '@workoutjournal/database';

@Module({
  imports: [ExercisesModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
