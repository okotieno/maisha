import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'furaha-health-library',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './health-library.component.html',
  styleUrls: ['./health-library.component.scss'],
})
export class HealthLibraryComponent {
  healthLibraries = [
    {
      title: 'Preventive Care',
      description: 'Provide information about preventive healthcare measures, including vaccinations, screenings, and lifestyle choices that can reduce the risk of diseases'
    },
    {
      title: 'Mental Health',
      description: 'Provide resources on mental health disorders, coping strategies, therapy options, and mindfulness techniques. Address common mental health concerns and reduce stigma through education'
    },
    {
      title: 'Dental Health',
      description: 'Provide resources on diagnosis, prevention, and treatment of diseases and conditions of the teeth, gums, and mouth. It is an important part of overall health and well-being.'
    },
    {
      title: 'Healthy Living Tips',
      description: 'Offer tips on maintaining a healthy lifestyle, including fitness routines, balanced nutrition, mental health strategies, and stress management techniques.'
    }
  ];
}
