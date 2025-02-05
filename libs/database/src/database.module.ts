import { Module } from '@nestjs/common';
import mikroORMConfig from './config/mikro-orm.config';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ExercisesRepository } from './repositories/exercises.repository';
import {
  ExerciseEntity,
  EXERCISES_REPOSITORY,
  ExercisesModule,
  MuscleGroupEntity,
} from '@workoutjournal/exercises';
import { MUSCLE_GROUP_REPOSITORY } from '@workoutjournal/exercises/repositories/muscle-group.repository.interface';
import { MuscleGroupRepository } from './repositories/muscle-group.repository';

@Module({
  imports: [
    MikroOrmModule.forRoot(mikroORMConfig),
    MikroOrmModule.forFeature([ExerciseEntity, MuscleGroupEntity]),
  ],
  providers: [
    {
      provide: EXERCISES_REPOSITORY,
      useClass: ExercisesRepository,
    },
    {
      provide: MUSCLE_GROUP_REPOSITORY,
      useClass: MuscleGroupRepository,
    },
  ],
  exports: [EXERCISES_REPOSITORY, MUSCLE_GROUP_REPOSITORY],
})
export class DatabaseModule {}
