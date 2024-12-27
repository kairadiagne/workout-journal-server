enum ExerciseDifficulty {
  Beginner = 'Beginner',
  Intermediate = 'Intermediate',
  Advanced = 'Advanced',
}

enum ExerciseForceType {
  Push = 'Push',
  Pull = 'Pull',
  Plyometric = 'Plyometric',
}

enum ExerciseMechanic {
  Compound = 'Compound',
  Isolation = 'Isolation',
}

enum ExerciseEquipment {
  Barbell = 'Barbell',
  Bodyweight = 'Bodyweight',
  Box = 'Box',
  Dumbbell = 'Dumbbell',
  Machine = 'Machine',
  Sled = 'Sled',
  Other = 'Other',
}

export class ExerciseResponseDTO {
  id: string;
  name: string;
  difficulty: ExerciseDifficulty;
  forceType: ExerciseForceType;
  mechanic: ExerciseMechanic;
  equipment: ExerciseEquipment;
  primaryMuscleGroups: MuscleGroupResponseDTO[];
  secondaryMuscleGroups: MuscleGroupResponseDTO[];

  constructor(
    id: string,
    name: string,
    difficulty: ExerciseDifficulty,
    forceType: ExerciseForceType,
    mechanic: ExerciseMechanic,
    equipment: ExerciseEquipment,
    primaryMuscleGroups: MuscleGroupResponseDTO[],
    secondaryMuscleGroups: MuscleGroupResponseDTO[],
  ) {
    this.id = id;
    this.name = name;
    this.difficulty = difficulty;
    this.forceType = forceType;
    this.exerciseMechanic = exerciseMechanic;
    this.equipment = equipment;
    this.primaryMuscleGroups = primaryMuscleGroups;
    this.secondaryMuscleGroups = secondaryMuscleGroups;
  }
}

export class MuscleGroupResponseDTO {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
