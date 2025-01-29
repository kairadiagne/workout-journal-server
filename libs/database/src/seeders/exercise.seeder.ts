import type { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import exercisesData from './exercises_v1.json';
import { ExerciseEntity } from '../entities/exercise.entity';
import { MuscleGroupEntity } from '../entities/muscle-group.entity';
import { MuscleGroup } from '../entities/muscle-group';
import { ExerciseDifficulty } from '../entities/exercise-difficulty';
import { ExerciseForceType } from '../entities/exercise-force-type';
import { ExerciseType } from '../entities/exercise-type';
import { ExerciseMechanic } from '../entities/exercise-mechanic';
import { ExerciseEquipment } from '../entities/exercise-equipment';

export class ExerciseSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    for (const exerciseData of exercisesData) {
      const muscleGroup = await em.findOne(MuscleGroupEntity, {
        type: exerciseData.muscle_group as MuscleGroup,
      });

      if (!muscleGroup) {
        console.warn(
          `Skipping exercise ${exerciseData.name} - Muscle group ${exerciseData.muscle_group} not found.`,
        );
        continue;
      }

      const muscleGroupReference = em.getReference(
        MuscleGroupEntity,
        muscleGroup.id,
      );

      const exercise = new ExerciseEntity(
        exerciseData.name,
        exerciseData.difficulty as ExerciseDifficulty,
        exerciseData.force_type as ExerciseForceType,
        exerciseData.exercise_type as ExerciseType,
        exerciseData.exercise_mechanic as ExerciseMechanic,
        exerciseData.equipment as ExerciseEquipment,
        muscleGroupReference,
        exerciseData.primary_muscles || [],
        exerciseData.secondary_muscles || [],
      );

      await em.upsert(ExerciseEntity, exercise);
      console.log(`✅ Inserted: ${exercise.name}`);
    }
  }
}
