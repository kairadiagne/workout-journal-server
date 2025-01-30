import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { ExerciseResponseDTO } from './exercise-response.dto';
import {
  EXERCISES_REPOSITORY,
  IExercisesRepository,
} from '@workoutjournal/exercises';

@Injectable()
export class ExercisesService {
  constructor(
    @Inject(EXERCISES_REPOSITORY)
    private readonly exerciseRepository: IExercisesRepository,
  ) {}

  async getExercises(): Promise<ExerciseResponseDTO[]> {
    try {
      const exercises = await this.exerciseRepository.findAll();

      return exercises.map((exercise) => {
        return ExerciseResponseDTO.fromEntity(exercise);
      });
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
