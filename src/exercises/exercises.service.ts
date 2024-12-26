import { Injectable } from '@nestjs/common';
import { readFile } from 'fs/promises';
import { ConfigService } from '@nestjs/config';
import { plainToInstance } from 'class-transformer';
import { ExerciseResponseDTO } from './exercise-response.dto';

@Injectable()
export class ExercisesService {
    constructor(private readonly configService: ConfigService) {}

    async getExercises(): Promise<ExerciseResponseDTO[]> {
        const filePath = this.configService.get("EXERCISE_LIST_PATH");
        const jsonString = await this.loadFileAsync(filePath);
        const json = JSON.parse(jsonString);
        const exercises: ExerciseResponseDTO[] = plainToInstance(ExerciseResponseDTO, json as object[]);
        return exercises;
    }

    private async loadFileAsync(filePath: string): Promise<string> {
        return await readFile(filePath, "utf-8");
    }
}