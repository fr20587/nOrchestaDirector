// NestJS Module
import { NestFactory } from '@nestjs/core';

// Module
import { AppModule } from './app.module';

async function bootstrap() {
  const port = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  console.log('ATHENDAT | n-OrchestaDirector is running on port:', port, 'Enjoy the music :)!');
}
bootstrap();
