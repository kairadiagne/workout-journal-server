/**
 * Repreents the skill and fitness level required to perform an exercise.
 */
enum ExerciseDifficulty {
  /**
   * Exercises suitable for individuals new to fitness or with limited experience.
   * These exercies are designed to build foundational strenth, mobility, and coordination.
   */
  Beginner = 'Beginner',

  /**
   * Exercises suitable for individuals with moderate experience and fitness levels.
   * These exercises require greater strength, balance, and coordination compared to beginner exercises.
   */
  Intermediate = 'Intermediate',

  /**
   * Exercises suitable for individuals with advanced strenght, coordination, and tiness levels.
   * These exercises ofton involve greater complexity, heavier loads, or more explosive movements.
   */
  Advanced = 'Advanced',
}

/**
 * Categorizes exercises based on the primary direction of force application during the movement.
 */
enum ExerciseForceType {
  /**
   * Involves force being exerted away from the body (e.g., bench press or squats).
   * These exercises typically work muscles involved in pushing movements.
   */
  Push = 'Push',

  /**
   * Involves force being exerted toward the body (e.g., pull-ups or seated rows).
   * These exercises typically work muscles involved in pulling movements.
   */
  Pull = 'Pull',

  /**
   * Involves force being applied without movement (e.g., planks or wall sits).
   * These exercises focus on holding positions to build strength or stability.
   */
  Static = 'Static',
}

/**
 * Categorizes exercises based on the movement type and mechanics involved.
 */
enum ExerciseType {
  /**
   * Compound exercises involve multiple muscle groups and joints working together.
   * These exercises are ideal for building overall strength and functionall fitness.
   */
  Compound = 'Compound',

  /**
   * Functional exercises mimic real-life movements and ofton involve multiple plans of motion.
   * These exercises are great for improving coordination, balance, and practical strenght.
   */
  Functional = 'Functional',

  /**
   * Isolation exercises target a single muscle group and typically involve movement around a single joint.
   * These exercises are ofton used to focus on specific muscles or for rehabilitation purposes.
   */
  Isolation = 'Isolation',

  /**
   * Plyometric exercises involve explosive, high-power movements designed to improve speed and power.
   * These exercises are commonly used in athletic training.
   */
  Plyometric = 'Plyometric',
}

/**
 * Represents the equipment used for exercises.
 */
enum ExerciseEquipment {
  Barbell = 'Barbell',
  Bench = 'Bench',
  Bodyweight = 'Bodyweight',
  Box = 'Box',
  Cable = 'Cable',
  Dumbbell = 'Dumbbell',
  Kettlebell = 'Kettlebell',
  Machine = 'Machine',
  MedicineBall = 'Medicine Ball',
  Plate = 'Plate',
  ResistanceBand = 'ResistanceBand',
  Sled = 'Sled',
  Other = 'Other',
}

export class ExerciseResponseDTO {
  id: string;
  name: string;
  difficulty: ExerciseDifficulty;
  forceType: ExerciseForceType;
  exerciseType: ExerciseType;
  equipment: ExerciseEquipment;
  primaryMuscles: MuscleResponseDTO[];
  secondaryMuscles: MuscleResponseDTO[];

  constructor(
    id: string,
    name: string,
    difficulty: ExerciseDifficulty,
    forceType: ExerciseForceType,
    exerciseType: ExerciseType,
    equipment: ExerciseEquipment,
    primaryMuscles: MuscleResponseDTO[],
    secondaryMuscles: MuscleResponseDTO[],
  ) {
    this.id = id;
    this.name = name;
    this.difficulty = difficulty;
    this.forceType = forceType;
    this.exerciseType = exerciseType;
    this.equipment = equipment;
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
