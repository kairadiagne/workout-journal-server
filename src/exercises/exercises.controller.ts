import { Controller, Get } from '@nestjs/common';
import { ExercisesService } from './exercises.service';
import { ExerciseResponseDTO } from './exercise-response.dto';

@Controller('exercises')
export class ExercisesController {
  constructor(private readonly exercisesService: ExercisesService) {}

  @Get()
  async getExercises(): Promise<ExerciseResponseDTO[]> {
    return await this.exercisesService.getExercises();
  }
}
