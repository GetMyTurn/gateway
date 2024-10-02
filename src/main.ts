import { NestFactory } from '@nestjs/core';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { envs } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1')
  const config = new DocumentBuilder()
    .setTitle('Api gateway')
    .setDescription('Handle the request and send the petition to the service ')
    .setVersion('1.0')
    .addTag('status')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/v1', app, document);
  
  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`Server running on port ${envs.port}`)
}
bootstrap();
