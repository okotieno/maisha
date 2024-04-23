import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailController } from './email.controller';

@Module({
  controllers: [
    EmailController
  ],
  providers: [
    EmailService,
    {
      provide: 'MAIL_CONFIG',
      useValue: {
        user: 'test@test.com',
        password: 'password'
      }
    }
  ],
  exports: [EmailService], // Make EmailService available for dependency injection in other modules
})
export class EmailModule {}
