import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';
import { MuscleGroup, MuscleGroupEntity } from '@workoutjournal/exercises';
import { IMuscleGroupRepository } from '@workoutjournal/exercises/repositories/muscle-group.repository.interface';

@Injectable()
export class MuscleGroupRepository implements IMuscleGroupRepository {
  constructor(
    @InjectRepository(MuscleGroupEntity)
    private readonly musclegroupRepository: EntityRepository<MuscleGroupEntity>,
  ) {}

  async findOne(type: MuscleGroup): Promise<MuscleGroupEntity | null> {
    return this.musclegroupRepository.findOne({ type: type });
  }
}
