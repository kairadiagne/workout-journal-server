import { Controller, Post } from '@nestjs/common';
import { WorkoutJournalAdminService } from './workout-journal-admin.service';

@Controller('admin')
export class WorkoutJournalAdminController {
  constructor(private readonly workoutJournalAdminService: WorkoutJournalAdminService) {}

  @Post('importexercises')
  importExercises(): Promise<void> {
    return this.workoutJournalAdminService.importExercises();
  }
}
