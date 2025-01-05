import { Module } from '@nestjs/common';
import { WorkoutJournalWorkerController } from './workout-journal-worker.controller';
import { WorkoutJournalWorkerService } from './workout-journal-worker.service';

@Module({
  imports: [],
  controllers: [WorkoutJournalWorkerController],
  providers: [WorkoutJournalWorkerService],
})
export class WorkoutJournalWorkerModule {}
