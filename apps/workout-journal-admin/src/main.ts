import { NestFactory } from '@nestjs/core';
import { WorkoutJournalAdminModule } from './workout-journal-admin.module';

async function bootstrap() {
  const app = await NestFactory.create(WorkoutJournalAdminModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
