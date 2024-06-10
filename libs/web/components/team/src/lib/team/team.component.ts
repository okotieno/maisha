import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { IconService } from '@furaha/shared/icon';
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
  imports: [CommonModule, MatIconModule],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent {
  teamMembers: TeamMember[] = [
    {
      name: 'Dr Abhishek Kansara',
      title: 'CEO & Founder',
      description: 'BDS (Hons) MFDS RCS (Eng) | DCT2 Restorative ',
      email: 'abhishek@maishahealthkenya.co.ke',
      imageUrl: "/assets/img/abhishek-profile.jpeg"
    },
    {
      name: 'Dr Dharmit Modasia',
      title: 'Project Management Lead ',
      description: 'BDS',
      email: 'dharmit@maishahealthkenya.co.ke',
      imageUrl: "/assets/img/dr.jpg"
    },
    {
      name: 'Owen Kelvin',
      title: 'CTO',
      description: 'BBS Actuarial',
      email: 'owen@maishahealthkenya.co.ke',
      imageUrl: "/assets/img/owen.jpeg"
    },
  ];

  constructor(private iconService: IconService) {
    iconService.registerIcons(['X'])
  }
}
