import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import databaseConfiguration from './config/database.config';
import { DatabaseConfig } from './config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [databaseConfiguration] }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        ...configService.get<DatabaseConfig>('database'),
        entities: [],
        synchronize: true, // Set to false in production
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
