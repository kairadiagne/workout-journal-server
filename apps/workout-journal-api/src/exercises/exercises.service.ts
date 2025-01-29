import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ExerciseResponseDTO } from './exercise-response.dto';
import { InjectRepository } from '@mikro-orm/nestjs';
import { ExerciseEntity } from '@workoutjournal/database';
import { EntityRepository } from '@mikro-orm/postgresql';

@Injectable()
export class ExercisesService {
  constructor(
    @InjectRepository(ExerciseEntity)
    private readonly exerciseRepository: EntityRepository<ExerciseEntity>,
  ) {}

  async getExercises(): Promise<ExerciseResponseDTO[]> {
    try {
      const exercises = await this.exerciseRepository.findAll();

      return exercises.map((exercise) => {
        return ExerciseResponseDTO.fromEntity(exercise);
      });
    } catch (error) {
      // TODO: - Should we generically map all db errors somewhere to this.
      // Instead of defining it in every route.
      throw new InternalServerErrorException();
    }
  }
}
