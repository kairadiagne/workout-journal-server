import {
  ExerciseDifficulty,
  ExerciseForceType,
  ExerciseType,
  ExerciseMechanic,
  ExerciseEquipment,
  MuscleGroup,
  ExerciseEntity,
} from '@workoutjournal/exercises';

export class ExerciseResponseDTO {
  id: string;
  name: string;
  difficulty: ExerciseDifficulty;
  forceType: ExerciseForceType;
  exerciseType: ExerciseType;
  exerciseMechanic: ExerciseMechanic;
  equipment: ExerciseEquipment;
  muscleGroup: MuscleGroup;
  primaryMuscles: string[];
  secondaryMuscles: string[];

  constructor(
    id: string,
    name: string,
    difficulty: ExerciseDifficulty,
    forceType: ExerciseForceType,
    exerciseMechanic: ExerciseMechanic,
    equipment: ExerciseEquipment,
    exerciseType: ExerciseType,
    muscleGroup: MuscleGroup,
    primaryMuscles: string[],
    secondaryMuscles: string[],
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

  static fromEntity(entity: ExerciseEntity): ExerciseResponseDTO {
    return new ExerciseResponseDTO(
      entity.publicId,
      entity.name,
      entity.difficulty,
      entity.forceType,
      entity.mechanic,
      entity.equipment,
      entity.exerciseType,
      entity.muscleGroup.type,
      entity.primaryMuscles,
      entity.secondaryMuscles,
    );
  }
}
