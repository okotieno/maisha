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
      name: 'Jane Doe',
      title: 'CEO & Founder',
      description: 'Lorem ipsum dolor sit amet.',
      email: 'example@example.com',
      imageUrl: "assets/img/user.svg"
    },
    {
      name: 'John Doe',
      title: 'Surgeon',
      description: 'Lorem ipsum dolor sit amet.',
      email: 'example@example.com',
      imageUrl: "assets/img/user.svg"
    },
    {
      name: 'Mike Ross',
      title: 'Doctor',
      description: 'Lorem ipsum dolor sit amet.',
      email: 'example@example.com',
      imageUrl:"assets/img/user.svg"
    },
    {
      name: 'John Doe',
      title: 'Dentist',
      description: 'Lorem ipsum dolor sit amet.',
      email: 'example@example.com',
      imageUrl: "assets/img/user.svg"
    }
  ];
}
