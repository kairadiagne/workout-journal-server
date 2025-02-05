import { MuscleGroup } from '../entities/muscle-group';
import { MuscleGroupEntity } from '../entities/muscle-group.entity';

export const MUSCLE_GROUP_REPOSITORY = Symbol('EXERCISES_REPOSITORY');

export interface IMuscleGroupRepository {
  findOne(type: MuscleGroup): Promise<MuscleGroupEntity | null>;
}
