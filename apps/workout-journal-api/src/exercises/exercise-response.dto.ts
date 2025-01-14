import {
  ExerciseDifficulty,
  ExerciseForceType,
  ExerciseType,
  ExerciseMechanic,
  ExerciseEquipment,
  MuscleGroup,
} from '@workoutjournal/database';

export class ExerciseResponseDTO {
  id: string;
  name: string;
  difficulty: ExerciseDifficulty;
  forceType: ExerciseForceType;
  exerciseType: ExerciseType;
  exerciseMechanic: ExerciseMechanic;
  equipment: ExerciseEquipment;
  muscleGroup: MuscleGroup;
  primaryMuscles: MuscleResponseDTO[];
  secondaryMuscles: MuscleResponseDTO[];

  constructor(
    id: string,
    name: string,
    difficulty: ExerciseDifficulty,
    forceType: ExerciseForceType,
    exerciseMechanic: ExerciseMechanic,
    equipment: ExerciseEquipment,
    exerciseType: ExerciseType,
    muscleGroup: MuscleGroup,
    primaryMuscles: MuscleResponseDTO[],
    secondaryMuscles: MuscleResponseDTO[],
  ) {
    this.id = id;
    this.name = name;
    this.difficulty = difficulty;
    this.forceType = forceType;
    this.exerciseType = exerciseType;
    this.exerciseMechanic = exerciseMechanic;
    this.equipment = equipment;
    this.muscleGroup = muscleGroup;
    this.primaryMuscles = primaryMuscles;
    this.secondaryMuscles = secondaryMuscles;
  }
}

export class MuscleResponseDTO {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
