import { Inject, Injectable, InternalServerErrorException } from '@nestjs/common';
import {
  ExerciseDifficulty,
  ExerciseEntity,
  ExerciseEquipment,
  ExerciseForceType,
  ExerciseMechanic,
  EXERCISES_REPOSITORY,
  ExerciseType,
  IExercisesRepository,
  MuscleGroup,
} from '@workoutjournal/exercises';
import exercisesData from './exercises_v1.json';
import {
  IMuscleGroupRepository,
  MUSCLE_GROUP_REPOSITORY,
} from '@workoutjournal/exercises/repositories/muscle-group.repository.interface';
import { toEnum } from '../common/utils/enum.utils';

@Injectable()
export class WorkoutJournalAdminService {
  constructor(
    @Inject(EXERCISES_REPOSITORY)
    private readonly exerciseRepository: IExercisesRepository,
    @Inject(MUSCLE_GROUP_REPOSITORY)
    private readonly muscleGroupRepository: IMuscleGroupRepository,
  ) {}

  async importExercises(): Promise<void> {
    for (const exerciseData of exercisesData) {
      const muscleGroupValue = toEnum(MuscleGroup, exerciseData.muscle_group, 'muscle_group');
      const muscleGroup = await this.muscleGroupRepository.findOne(muscleGroupValue);

      if (!muscleGroup) {
        console.warn(
          `Skipping exercise ${exerciseData.name} - Muscle group ${exerciseData.muscle_group} not found.`,
        );
        continue;
      }

      const exercise = new ExerciseEntity(
        exerciseData.name,
        toEnum(ExerciseDifficulty, exerciseData.difficulty, 'difficulty'),
        toEnum(ExerciseForceType, exerciseData.force_type, 'force_type'),
        toEnum(ExerciseType, exerciseData.exercise_type, 'exercise_type'),
        toEnum(ExerciseMechanic, exerciseData.exercise_mechanic, 'exercise_mechanic'),
        toEnum(ExerciseEquipment, exerciseData.equipment, 'equipment'),
        muscleGroup,
        exerciseData.primary_muscles || [],
        exerciseData.secondary_muscles || [],
      );

      try {
        await this.exerciseRepository.upsert(exercise);
        console.log(`Inserted: ${exercise.name}`);
      } catch (error) {
        throw new InternalServerErrorException(
          `Failed to upsert exercise "${exercise.name}": ${error instanceof Error ? error.message : String(error)}`,
        );
      }
    }
  }
}
