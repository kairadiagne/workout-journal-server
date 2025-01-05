import { NestFactory } from '@nestjs/core';
import { WorkoutJournalWorkerModule } from './workout-journal-worker.module';

async function bootstrap() {
  const app = await NestFactory.create(WorkoutJournalWorkerModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
