import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { ExerciseResponseDTO } from './exercise-response.dto';
import exercisesData from './exercises_v1.json';

@Injectable()
export class ExercisesService {
  async getExercises(): Promise<ExerciseResponseDTO[]> {
    const exercises: ExerciseResponseDTO[] = plainToInstance(
      ExerciseResponseDTO,
      exercisesData,
    );
    return exercises;
  }
}
