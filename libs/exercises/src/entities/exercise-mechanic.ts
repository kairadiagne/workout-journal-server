/**
 * Enum representing different types of repetitions for exercises.
 */
export enum ExerciseMechanic {
  /**
   * Countable reps, no weight by default, optional weight allowed (e.g., push-ups).
   */
  DynamicBodyWeight = 'DynamicBodyWeight',

  /**
   * Countable reps, weight is optional (e.g., sled pushes).
   */
  DynamicOptionalWeight = 'DynamicOptionalWeight',

  /**
   *  Countable reps, weight is mandatory (e.g., barbell squats).
   */
  DynamicRequiredWeight = 'DynamicRequiredWeight',

  /**
   * Countable reps with assistance (e.g., assisted pull-ups).
   */
  DynamicAssistedWeight = 'DynamicAssistedWeight',

  /**
   * Time-based hold, wirht optional weights (e.g., planks).
   */
  StaticTimeBased = 'StaticTimeBased',
}
