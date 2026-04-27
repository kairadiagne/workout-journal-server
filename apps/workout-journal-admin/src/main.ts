import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { WorkoutJournalAdminModule } from './admin/workout-journal-admin.module';
import { GlobalExceptionFilter } from './common/filters/global-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(WorkoutJournalAdminModule);

  app.useGlobalFilters(new GlobalExceptionFilter());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
