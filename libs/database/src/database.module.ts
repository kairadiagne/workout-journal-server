import { Module } from '@nestjs/common';
import mikroORMConfig from './config/mikro-orm.config';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ExercisesRepository } from './repositories/exercises.repository';
import {
  ExerciseEntity,
  EXERCISES_REPOSITORY,
  ExercisesModule,
} from '@workoutjournal/exercises';

@Module({
  imports: [
    MikroOrmModule.forRoot(mikroORMConfig),
    MikroOrmModule.forFeature([ExerciseEntity]),
    ExercisesModule,
  ],
  providers: [
    {
      provide: EXERCISES_REPOSITORY,
      useClass: ExercisesRepository,
    },
  ],
  exports: [EXERCISES_REPOSITORY],
})
export class DatabaseModule {}
