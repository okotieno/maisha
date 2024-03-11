import { Component, ElementRef, HostListener } from '@angular/core';
import { WebComponentsHeroComponent } from '@furaha/web/components/hero';
import { WebComponentsAboutComponent } from '@furaha/web/components/about-us';
import { WebComponentsClientsComponent } from '@furaha/web/components/clients';
import { ProjectsComponent } from '@furaha/projects';
import { ContactComponent } from '@furaha/contact';
import { TeamComponent } from '@furaha/team';
import { HealthLibraryComponent } from '@maisha/web/components/health-library';
import { FooterComponent } from '@maisha/web/components/footer';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  standalone: true,
  templateUrl: 'home.component.html',
  imports: [
    WebComponentsHeroComponent,
    WebComponentsAboutComponent,
    WebComponentsClientsComponent,
    ProjectsComponent,
    ContactComponent,
    TeamComponent,
    HealthLibraryComponent,
    FooterComponent
  ],
  styleUrls: ['home.component.scss']
})
export class HomeComponent {
  activeSection = 'hero';
  constructor(
    private location: Location,
    private router: Router, private elementRef: ElementRef) { }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {

    // Get all section elements
    const sections = this.elementRef.nativeElement.querySelectorAll('section');

    // Find the section in view
    let activeSection = '';
    sections.forEach((section: any) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        activeSection = section.id;
      }
    });

    // Change fragment based on active section
    this.changeFragment(activeSection);
  }

  changeFragment(fragment: string) {
    if(fragment !== this.activeSection && fragment.length > 0) {
      this.activeSection = fragment;
      this.location.replaceState(`/#${fragment}`);
    }
  }
}
