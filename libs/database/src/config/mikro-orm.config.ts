import { defineConfig, ReflectMetadataProvider } from '@mikro-orm/postgresql';
import { ExerciseEntity } from '../entities/exercise.entity';
import { MuscleGroup } from '../entities/muscle-group';
import { MuscleGroupEntity } from '../entities/muscle-group.entity';

require('dotenv').config();

export default defineConfig({
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT || '5432', 10),
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  dbName: process.env.POSTGRES_DB,
  entities: [ExerciseEntity, MuscleGroupEntity],
  debug: true,
});
