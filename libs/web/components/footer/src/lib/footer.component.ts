import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoinNewsletterComponent } from '@maisha/web/components/join-newsletter';
import { IsActiveMatchOptions, RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'furaha-footer',
  standalone: true,
  imports: [
    CommonModule, JoinNewsletterComponent,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  routerLinkActiveOptions: IsActiveMatchOptions = {
    fragment: 'exact',
    paths: 'exact',
    queryParams: 'exact',
    matrixParams: 'exact'
  }
}
