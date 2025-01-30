import { Test, TestingModule } from '@nestjs/testing';
import { WorkoutJournalAdminController } from './workout-journal-admin.controller';
import { WorkoutJournalAdminService } from './workout-journal-admin.service';

describe('WorkoutJournalAdminController', () => {
  let workoutJournalAdminController: WorkoutJournalAdminController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [WorkoutJournalAdminController],
      providers: [WorkoutJournalAdminService],
    }).compile();

    workoutJournalAdminController = app.get<WorkoutJournalAdminController>(
      WorkoutJournalAdminController,
    );
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(workoutJournalAdminController.getHello()).toBe('Hello World!');
    });
  });
});
