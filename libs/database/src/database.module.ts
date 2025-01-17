import { Module } from '@nestjs/common';
import mikroORMConfig from './config/mikro-orm.config';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ExerciseEntity } from './entities/exercise.entity';
import { MuscleGroupEntity } from './entities/muscle-group.entity';

@Module({
  imports: [
    MikroOrmModule.forFeature([ExerciseEntity, MuscleGroupEntity]),
    MikroOrmModule.forRoot(mikroORMConfig),
  ],
})
export class DatabaseModule {}
