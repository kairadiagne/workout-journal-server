import { Module } from '@nestjs/common';
import { WorkoutJournalAdminController } from './workout-journal-admin.controller';
import { WorkoutJournalAdminService } from './workout-journal-admin.service';
import { ExercisesModule } from '@workoutjournal/exercises';
import { DatabaseModule } from '@workoutjournal/database';

@Module({
  imports: [ExercisesModule, DatabaseModule],
  controllers: [WorkoutJournalAdminController],
  providers: [WorkoutJournalAdminService],
})
export class WorkoutJournalAdminModule {}
