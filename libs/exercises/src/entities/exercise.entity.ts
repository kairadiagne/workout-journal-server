import { defineEntity, p } from '@mikro-orm/postgresql';
import { v4 as uuidv4 } from 'uuid';
import { ExerciseDifficulty } from './exercise-difficulty';
import { ExerciseForceType } from './exercise-force-type';
import { ExerciseType } from './exercise-type';
import { ExerciseMechanic } from './exercise-mechanic';
import { ExerciseEquipment } from './exercise-equipment';
import { MuscleGroupEntity } from './muscle-group.entity';

const ExerciseSchema = defineEntity({
  name: 'ExerciseEntity',
  properties: {
    id: p.integer().primary().autoincrement(),
    publicId: p.uuid().unique(),
    name: p.string(),
    difficulty: p.enum(() => ExerciseDifficulty),
    forceType: p.enum(() => ExerciseForceType),
    exerciseType: p.enum(() => ExerciseType),
    mechanic: p.enum(() => ExerciseMechanic),
    equipment: p.enum(() => ExerciseEquipment),
    muscleGroup: p.manyToOne(() => MuscleGroupEntity).eager(),
    primaryMuscles: p.array(),
    secondaryMuscles: p.array(),
  },
});

export class ExerciseEntity extends ExerciseSchema.class {
  constructor(
    name: string,
    difficulty: ExerciseDifficulty,
    forceType: ExerciseForceType,
    exerciseType: ExerciseType,
    mechanic: ExerciseMechanic,
    equipment: ExerciseEquipment,
    muscleGroup: MuscleGroupEntity,
    primaryMuscles: string[] = [],
    secondaryMuscles: string[] = [],
    publicId: string = uuidv4(),
  ) {
    super();
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

ExerciseSchema.setClass(ExerciseEntity);
