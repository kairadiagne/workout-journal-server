import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExercisesModule } from '../exercises/exercises.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ExercisesModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
