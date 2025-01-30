import { Controller, Get } from '@nestjs/common';
import { WorkoutJournalAdminService } from './workout-journal-admin.service';

@Controller()
export class WorkoutJournalAdminController {
  constructor(
    private readonly workoutJournalAdminService: WorkoutJournalAdminService,
  ) {}

  @Get()
  getHello(): string {
    return this.workoutJournalAdminService.getHello();
  }
}
