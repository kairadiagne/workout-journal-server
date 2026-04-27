import { defineEntity, p } from '@mikro-orm/postgresql';
import { v4 as uuidv4 } from 'uuid';
import { MuscleGroup } from './muscle-group';

const MuscleGroupSchema = defineEntity({
  name: 'MuscleGroupEntity',
  properties: {
    id: p.integer().primary().autoincrement(),
    publicId: p.uuid().unique(),
    type: p.enum(() => MuscleGroup),
  },
});

export class MuscleGroupEntity extends MuscleGroupSchema.class {
  constructor(type: MuscleGroup, publicId: string = uuidv4()) {
    super();
    this.type = type;
    this.publicId = publicId;
  }
}

MuscleGroupSchema.setClass(MuscleGroupEntity);
