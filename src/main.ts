// NestJS Module
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

// Third's Modules
import * as csurf from 'csurf';
import * as helmet from 'helmet';
import * as rateLimit from 'express-rate-limit';

// Module
import { AppModule } from './app.module';

async function bootstrap() {
  const port = process.env.PORT || 3000;

  const app = await NestFactory.create(AppModule);

  app.enableCors();

  //app.use(csurf());
  app.use(helmet());
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('n-OrchestaDirector')
    .setDescription('ATHENDAT API description')
    .setVersion('1.0')
    .addTag('eAgroMarket')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(port);
  console.log(
    'ATHENDAT | n-OrchestaDirector is running on port:',
    port,
    'Enjoy the music :)!',
  );
}
bootstrap();
