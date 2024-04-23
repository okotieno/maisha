// Import necessary modules
import { Controller, Post, Body } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailDto } from './email.dto';

// Define the DTO (Data Transfer Object) for the incoming request body

@Controller('emails')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('send')
  async sendEmail(@Body() emailData: EmailDto) {
    try {
      // Call the sendEmail method of the EmailService
      await this.emailService.sendEmail(emailData);
      return 'Email sent successfully';
    } catch (error) {
      return 'Failed to send email';
    }
  }
}
