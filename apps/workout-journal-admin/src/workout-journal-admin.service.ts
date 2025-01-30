import { Injectable } from '@nestjs/common';

@Injectable()
export class WorkoutJournalAdminService {
  getHello(): string {
    return 'Hello World!';
  }
}
