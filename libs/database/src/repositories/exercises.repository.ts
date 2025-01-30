import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';
import {
  ExerciseEntity,
  IExercisesRepository,
} from '@workoutjournal/exercises';

@Injectable()
export class ExercisesRepository implements IExercisesRepository {
  constructor(
    @InjectRepository(ExerciseEntity)
    private readonly exerciseRepository: EntityRepository<ExerciseEntity>,
  ) {}

  async findAll(): Promise<ExerciseEntity[]> {
    return await this.exerciseRepository.findAll();
  }
}
