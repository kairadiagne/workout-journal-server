import { Entity, Enum, PrimaryKey, Property, Unique } from '@mikro-orm/core';
import { v4 as uuidv4 } from 'uuid';
import { MuscleGroup } from './muscle-group';

@Entity()
export class MuscleGroupEntity {
  @PrimaryKey({ type: `number`, autoincrement: true })
  id!: number;

  @Property({ type: `uuid`, unique: true })
  publicId: string;

  @Enum(() => MuscleGroup)
  type: MuscleGroup;

  constructor(type: MuscleGroup, publicId: string = uuidv4()) {
    this.type = type;
    this.publicId = publicId;
  }
}
