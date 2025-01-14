import { ExerciseDifficulty } from './exercise-difficulty';
import { ExerciseForceType } from './exercise-force-type';
import { ExerciseType } from './exercise-type';
import { ExerciseMechanic } from './exercise-mechanic';
import { ExerciseEquipment } from './exercise-equipment';
import { Entity, Enum, OneToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { v4 as uuidv4 } from 'uuid';
import { MuscleGroupEntity } from './muscle-group.entity';

@Entity()
export class ExerciseEntity {
  @PrimaryKey({ type: 'number', autoincrement: true })
  id!: number;

  @Property({ type: 'uuid', unique: true })
  publicId: string;

  @Property()
  name: string;

  @Enum(() => ExerciseDifficulty)
  difficulty: ExerciseDifficulty;

  @Enum(() => ExerciseForceType)
  forceType: ExerciseForceType;

  @Enum(() => ExerciseType)
  exerciseType: ExerciseType;

  @Enum(() => ExerciseMechanic)
  mechanic: ExerciseMechanic;

  @Enum(() => ExerciseEquipment)
  equipment: ExerciseEquipment;

  @OneToOne(() => MuscleGroupEntity, { eager: true })
  muscleGroup: MuscleGroupEntity;

  @Property()
  primaryMuscles: string[];

  @Property()
  secondaryMuscles: string[];

  constructor(
    publicId: string = uuidv4(),
    name: string,
    difficulty: ExerciseDifficulty,
    forceType: ExerciseForceType,
    exerciseType: ExerciseType,
    mechanic: ExerciseMechanic,
    equipment: ExerciseEquipment,
    muscleGroup: MuscleGroupEntity,
    primaryMuscles: string[] = [],
    secondaryMuscles: string[] = [],
  ) {
    this.publicId = publicId;
    this.name = name;
    this.difficulty = difficulty;
    this.forceType = forceType;
    this.exerciseType = exerciseType;
    this.mechanic = mechanic;
    this.equipment = equipment;
    this.muscleGroup = muscleGroup;
    this.primaryMuscles = primaryMuscles;
    this.secondaryMuscles = secondaryMuscles;
  }
}
