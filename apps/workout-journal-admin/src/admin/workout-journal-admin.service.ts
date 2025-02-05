import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
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

@Injectable()
export class WorkoutJournalAdminService {
  constructor(
    @Inject(EXERCISES_REPOSITORY)
    private readonly exerciseRepository: IExercisesRepository,
    @Inject(MUSCLE_GROUP_REPOSITORY)
    private readonly muscleGroupRepository: IMuscleGroupRepository,
  ) {}

  async importExercises() {
    for (const exerciseData of exercisesData) {
      const muscleGroup = await this.muscleGroupRepository.findOne(
        exerciseData.muscle_group as MuscleGroup,
      );

      if (!muscleGroup) {
        console.warn(
          `Skipping exercise ${exerciseData.name} - Muscle group ${exerciseData.muscle_group} not found.`,
        );
        continue;
      }

      const exercise = new ExerciseEntity(
        exerciseData.name,
        exerciseData.difficulty as ExerciseDifficulty,
        exerciseData.force_type as ExerciseForceType,
        exerciseData.exercise_type as ExerciseType,
        exerciseData.exercise_mechanic as ExerciseMechanic,
        exerciseData.equipment as ExerciseEquipment,
        muscleGroup,
        exerciseData.primary_muscles || [],
        exerciseData.secondary_muscles || [],
      );

      try {
        await this.exerciseRepository.upsert(exercise);
        console.log(`✅ Inserted: ${exercise.name}`);
      } catch (error) {
        throw new InternalServerErrorException();
      }
    }
  }
}
