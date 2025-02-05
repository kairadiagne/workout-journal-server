import type { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { MuscleGroupSeeder } from './muscle-group.seeder';

export class DatabaseSeeder extends Seeder {
  run(em: EntityManager): Promise<void> {
    return this.call(em, [MuscleGroupSeeder]);
  }
}
