/**
 * Categorizes exercises based on the movement type and mechanics involved.
 */
export enum ExerciseType {
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
