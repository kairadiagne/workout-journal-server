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
}

export class MuscleGroupResponseDTO {
  id: string;
  name: string;
}
