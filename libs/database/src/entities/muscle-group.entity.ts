import { Entity, PrimaryKey, Property, Unique } from '@mikro-orm/core';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class MuscleGroupEntity {
  @PrimaryKey({ type: `number`, autoincrement: true })
  id!: number;

  @Property({ type: `uuid`, unique: true })
  publicId: string;

  @Property({ unique: true })
  name: string;

  constructor(publicId: string = uuidv4(), name: string) {
    this.publicId = publicId;
    this.name = name;
  }
}
