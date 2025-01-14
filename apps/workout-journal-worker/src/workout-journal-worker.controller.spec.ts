import { Test, TestingModule } from '@nestjs/testing';
import { WorkoutJournalWorkerController } from './workout-journal-worker.controller';
import { WorkoutJournalWorkerService } from './workout-journal-worker.service';

describe('WorkoutJournalWorkerController', () => {
  let workoutJournalWorkerController: WorkoutJournalWorkerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [WorkoutJournalWorkerController],
      providers: [WorkoutJournalWorkerService],
    }).compile();

    workoutJournalWorkerController = app.get<WorkoutJournalWorkerController>(
      WorkoutJournalWorkerController,
    );
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(workoutJournalWorkerController.getHello()).toBe('Hello World!');
    });
  });
});
