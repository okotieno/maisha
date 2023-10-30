import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../components/header/src/lib/header.component';
import { WebComponentsHeroComponent } from '@furaha/web/components/hero';
import { WebComponentsAboutComponent } from '@furaha/web/components/about-us';
import { WebComponentsClientsComponent } from '@furaha/web/components/clients';
import { ProjectsComponent } from '@furaha/projects';
import { ContactComponent } from '@furaha/contact';
import { TeamComponent } from '@furaha/team';
import { HealthLibraryComponent } from '@maisha/web/components/health-library';
import { FooterComponent } from '@maisha/web/components/footer';

@Component({
  standalone: true,
  templateUrl: 'home.component.html',
  imports: [
    HeaderComponent,
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
export class HomeComponent {}
