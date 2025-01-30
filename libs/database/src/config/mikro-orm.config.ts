import { defineConfig } from '@mikro-orm/postgresql';
import { SeedManager } from '@mikro-orm/seeder';
import { ExerciseEntity, MuscleGroupEntity } from '@workoutjournal/exercises';

require('dotenv').config();

export default defineConfig({
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT || '5432', 10),
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  dbName: process.env.POSTGRES_DB,
  entities: [ExerciseEntity, MuscleGroupEntity],
  debug: true,
  extensions: [SeedManager],
  seeder: {
    path: 'libs/database/src/seeders',
    defaultSeeder: 'DatabaseSeeder',
  },
  migrations: {
    tableName: 'mikro_orm_migrations',
    path: 'libs/database/src/migrations',
    transactional: true,
    allOrNothing: true,
    snapshot: true,
    emit: 'ts',
  },
});
