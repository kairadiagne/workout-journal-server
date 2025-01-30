import { Module } from '@nestjs/common';
import { WorkoutJournalAdminController } from './workout-journal-admin.controller';
import { WorkoutJournalAdminService } from './workout-journal-admin.service';

@Module({
  imports: [],
  controllers: [WorkoutJournalAdminController],
  providers: [WorkoutJournalAdminService],
})
export class WorkoutJournalAdminModule {}
