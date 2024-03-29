import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
export interface TeamMember {
  name: string;
  title: string;
  description: string;
  email: string;
  imageUrl: string;
}

@Component({
  selector: 'furaha-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent {
  teamMembers: TeamMember[] = [
    {
      name: 'Abhishek Kansara',
      title: 'CEO & Founder',
      description: 'BDS (Hons) MFDS RCS (Eng) | DCT2 Restorative ',
      email: 'abhishek@maishahealthkenya.co.ke',
      imageUrl: "https://media.licdn.com/dms/image/C5603AQFY0yBu3sP9tg/profile-displayphoto-shrink_800_800/0/1544964726504?e=1713398400&v=beta&t=tVhW9Fs69ci0HtPga8pdwW38Yw7RrHp5z8vpcTZ2fI0"
    },
    {
      name: 'Owen Kelvin',
      title: 'CTO',
      description: 'BBS Actuarial',
      email: 'owen@maishahealthkenya.co.ke',
      imageUrl: "https://media.licdn.com/dms/image/C5103AQE_PgQB_w77gQ/profile-displayphoto-shrink_800_800/0/1517427013563?e=1713398400&v=beta&t=d1FBFJ_UsVCC1_ybcOrlwLukim2siIP2SMdrigq33GQ"
    },
  ];
}
