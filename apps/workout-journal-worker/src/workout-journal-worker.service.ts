import { Injectable } from '@nestjs/common';

@Injectable()
export class WorkoutJournalWorkerService {
  getHello(): string {
    return 'Hello World!';
  }
}
