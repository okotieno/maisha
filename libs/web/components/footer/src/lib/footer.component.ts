import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoinNewsletterComponent } from '@maisha/web/components/join-newsletter';

@Component({
  selector: 'furaha-footer',
  standalone: true,
  imports: [CommonModule, JoinNewsletterComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {}
