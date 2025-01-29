import { Module } from '@nestjs/common';
import { ExercisesService } from './exercises.service';
import { ExercisesController } from './exercises.controller';
import { MikroORM } from '@mikro-orm/postgresql';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ExerciseEntity } from '@workoutjournal/database';

@Module({
  imports: [MikroOrmModule.forFeature([ExerciseEntity])],
  controllers: [ExercisesController],
  providers: [ExercisesService],
})
export class ExercisesModule {}
