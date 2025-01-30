import type { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { MuscleGroup, MuscleGroupEntity } from '@workoutjournal/exercises';

export class MuscleGroupSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    for (const type of Object.values(MuscleGroup)) {
      const exists = await em.findOne(MuscleGroupEntity, { type });

      if (exists) {
        console.log(`⚠️ Skipped (already exists): ${type}`);
        continue;
      }

      await em.insert(MuscleGroupEntity, new MuscleGroupEntity(type));
      console.log(`✅ Inserted: ${type}`);
    }
  }
}
