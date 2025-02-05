import { Test, TestingModule } from '@nestjs/testing';
import { ExercisesService } from './exercises.service';

describe('ExercisesService', () => {
  let service: ExercisesService;

  // TODO: To fix the test we need to inject a mock exercises repository.
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExercisesService],
    }).compile();

    service = module.get<ExercisesService>(ExercisesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
