import type { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import {
  ExerciseDifficulty,
  ExerciseEntity,
  ExerciseEquipment,
  ExerciseForceType,
  ExerciseMechanic,
  ExerciseType,
  MuscleGroup,
  MuscleGroupEntity,
} from '@workoutjournal/exercises';
import exercisesData from './exercises_v1.json';

function toEnum<T extends Record<string, string>>(enumObj: T, value: string, field: string): T[keyof T] {
  const valid = Object.values(enumObj) as string[];
  if (!valid.includes(value)) {
    throw new Error(`Invalid ${field} "${value}". Expected one of: ${valid.join(', ')}`);
  }
  return value as T[keyof T];
}

export class ExerciseSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    for (const data of exercisesData) {
      const exists = await em.findOne(ExerciseEntity, { name: data.name });
      if (exists) {
        console.log(`⚠️  Skipped (already exists): ${data.name}`);
        continue;
      }

      const muscleGroupType = toEnum(MuscleGroup, data.muscle_group, 'muscle_group');
      const muscleGroup = await em.findOne(MuscleGroupEntity, { type: muscleGroupType });

      if (!muscleGroup) {
        console.warn(`⚠️  Skipping "${data.name}" - muscle group "${data.muscle_group}" not found`);
        continue;
      }

      const exercise = new ExerciseEntity(
        data.name,
        toEnum(ExerciseDifficulty, data.difficulty, 'difficulty'),
        toEnum(ExerciseForceType, data.force_type, 'force_type'),
        toEnum(ExerciseType, data.exercise_type, 'exercise_type'),
        toEnum(ExerciseMechanic, data.exercise_mechanic, 'exercise_mechanic'),
        toEnum(ExerciseEquipment, data.equipment, 'equipment'),
        muscleGroup,
        data.primary_muscles,
        data.secondary_muscles,
        data.id,
      );

      em.persist(exercise);
      console.log(`✅ Inserted: ${data.name}`);
    }

    await em.flush();
  }
}
