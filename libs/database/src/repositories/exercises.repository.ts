import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';
import {
  ExerciseEntity,
  IExercisesRepository,
  MuscleGroupEntity,
} from '@workoutjournal/exercises';

@Injectable()
export class ExercisesRepository implements IExercisesRepository {
  constructor(
    @InjectRepository(ExerciseEntity)
    private readonly exerciseRepository: EntityRepository<ExerciseEntity>,
    @InjectRepository(MuscleGroupEntity)
    private readonly muscleGroupRepository: EntityRepository<MuscleGroupEntity>,
  ) {}

  async findAll(): Promise<ExerciseEntity[]> {
    return await this.exerciseRepository.findAll();
  }

  async upsert(exercise: ExerciseEntity): Promise<void> {
    const muscleGroup = await this.muscleGroupRepository.getReference(
      exercise.muscleGroup.id,
    );
    exercise.muscleGroup = muscleGroup;
    await this.exerciseRepository.upsert(exercise);
  }
}

