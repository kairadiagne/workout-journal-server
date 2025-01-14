import { Controller, Get } from '@nestjs/common';
import { WorkoutJournalWorkerService } from './workout-journal-worker.service';

@Controller()
export class WorkoutJournalWorkerController {
  constructor(
    private readonly workoutJournalWorkerService: WorkoutJournalWorkerService,
  ) {}

  @Get()
  getHello(): string {
    return this.workoutJournalWorkerService.getHello();
  }
}
