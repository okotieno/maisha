import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppThemeService } from '@furaha/shared/theme';

@Component({
  standalone: true,
  imports: [ RouterModule],
  selector: 'furaha-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public themeService: AppThemeService) {
  }
  title = 'furaha';
}