import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import databaseConfig, { DatabaseConfig } from './config/database.config';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { ExerciseEntity } from './entities/exercise.entity';
import { MuscleGroupEntity } from './entities/muscle-group.entity';

@Module({
  imports: [
    MikroOrmModule.forRootAsync({
      imports: [ConfigModule.forRoot({ load: [databaseConfig] })],
      useFactory: async (configService: ConfigService) => {
        const config = configService.getOrThrow<DatabaseConfig>('database');
        return {
          driver: PostgreSqlDriver,
          host: config.host,
          port: config.port,
          user: config.user,
          password: config.password,
          dbName: config.database,
          autoLoadEntities: true, // Automatically load entities registered using forFeature()
          debug: true,
        };
      },
      inject: [ConfigService],
    }),
    MikroOrmModule.forFeature([ExerciseEntity, MuscleGroupEntity]),
  ],
})
export class DatabaseModule {}
