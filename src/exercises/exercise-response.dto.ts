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
 * Enum representing different types of repetitions for exercises.
 */
enum RepetitionType {
  /**
   * Dynamic reps, e.g., 10 reps with weights
   */
  DynamicReps = 'DynamicReps',

  /**
   * Static time-based reps, e.g., plank for 30 seconds
   */
  StaticReps = 'StaticReps',

  /**
   * Static reps with weight, e.g., wall sit with weight for 60 seconds
   */
  StaticWithWeightReps = 'StaticWithWeightReps',
}

/**
 * Enum representing major muscle groups.
 * https://levelsprotein.com/blogs/guides/the-ultimate-muscle-groups-guide
 */
enum MuscleGroup {
  /**
   * Gluteus muscles.
   */
  Glutes = 'Glutes',

  /**
   * Muscles of the back, including Trapezius, Rhomboids, and Latissimus Dorsi.
   */
  Back = 'Back (Trapezius, Rhomboids, and Lats)',

  /**
   * Pectoralis muscles of the chest.
   */
  Chest = 'Chest',

  /**
   * Deltoid muscles of the shoulders.
   */
  Shoulders = 'Shoulders',

  /**
   * Quadriceps muscles of the front thigh.
   */
  Quadriceps = 'Quadriceps',

  /**
   * Hamstring muscles of the back thigh.
   */
  Hamstrings = 'Hamstrings',

  /**
   * Gastrocnemius and Soleus muscles of the calves.
   */
  Calves = 'Calves',

  /**
   * Triceps muscles of the upper arm.
   */
  Triceps = 'Triceps',

  /**
   * Biceps muscles of the upper arm.
   */
  Biceps = 'Biceps',

  /**
   * Rectus Abdominis and Obliques muscles of the abdomen.
   */
  Abs = 'Abs',

  /**
   * Muscles of the forearms and grip.
   */
  GripAndForearms = 'Grip and Forearms',
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
  repetitionType: RepetitionType;
  equipment: ExerciseEquipment;
  muscleGroup: MuscleGroup;
  primaryMuscles: MuscleResponseDTO[];
  secondaryMuscles: MuscleResponseDTO[];

  constructor(
    id: string,
    name: string,
    difficulty: ExerciseDifficulty,
    forceType: ExerciseForceType,
    repetitionType: RepetitionType,
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
    this.repetitionType = repetitionType;
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
