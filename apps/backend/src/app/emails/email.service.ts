// email.service.ts

import { Inject, Injectable } from '@nestjs/common';
import { createTransport } from 'nodemailer';
import { EmailDto } from './email.dto';

export class MailConfigDto {
  user: string;
  password: string;
}

@Injectable()
export class EmailService {

  constructor(@Inject('MAIL_CONFIG') mailConfig: MailConfigDto ) {
    console.log(mailConfig)
  }

  async sendEmail(emailData: EmailDto): Promise<string> {
    try {
      // Create a nodemailer transporter
      const transporter = createTransport({
        service: 'gmail',
        auth: {
          user: 'yourgmail@gmail.com', // your gmail address
          pass: 'yourpassword' // your gmail password
        }
      });

      // Create the email message
      const message = {
        from: 'yourgmail@gmail.com', // sender address
        to: emailData.email, // list of receivers
        subject: emailData.subject, // Subject line
        text: `Dear ${emailData.fullName},\n\nThank you for your message:\n\n${emailData.message}\n\nBest Regards,\nYour Name` // plain text body
      };

      // Send the email
      await transporter.sendMail(message);

      // Send acknowledgment email to info@healthymaisha.com
      const acknowledgmentMessage = {
        from: 'yourgmail@gmail.com', // sender address
        to: 'info@healthymaisha.com', // list of receivers
        subject: 'Acknowledgment of Receipt', // Subject line
        text: `Dear Healthymaisha,\n\nYou have received a message from ${emailData.fullName} (${emailData.email}) with the subject "${emailData.subject}".\n\nMessage:\n${emailData.message}` // plain text body
      };

      // Send the acknowledgment email
      await transporter.sendMail(acknowledgmentMessage);

      // You can save the emailData to a database here if you want to store it

      return 'Email sent successfully';
    } catch (error) {
      console.log('Error occurred while sending email:', error.message);
      throw error;
    }
  }
}
