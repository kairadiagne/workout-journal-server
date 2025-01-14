/**
 * Categorizes exercises based on the primary direction of force application during the movement.
 */
export enum ExerciseForceType {
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
