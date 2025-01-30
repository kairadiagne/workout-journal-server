import { ExerciseEntity } from './entities/exercise.entity';

export const EXERCISES_REPOSITORY = Symbol('EXERCISES_REPOSITORY');

export interface IExercisesRepository {
  findAll(): Promise<ExerciseEntity[]>;
}
