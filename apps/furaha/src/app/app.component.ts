import { AfterViewInit, Component } from '@angular/core';
import { AppThemeService } from '@furaha/shared/theme';
import { HeaderComponent } from '@furaha/web/components/header';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ScrollService } from '@maisha/shared/services/scroll';

@Component({
  standalone: true,
  imports: [
    HeaderComponent,
    RouterOutlet
  ],
  selector: 'furaha-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  constructor(public themeService: AppThemeService, private scrollService: ScrollService, private route: ActivatedRoute) {
  }

  title = 'furaha';

  isSelectorValid(selector: string) {
    if (selector === '#') return false;
    // Regular expression to match common CSS selector patterns
    const selectorRegex = /^([a-zA-Z0-9-_*#.\s>+~:[\]=|^$,)(]+)+$/;
    return selectorRegex.test(selector);
  }

  ngAfterViewInit(): void {
    this.route.fragment.subscribe((fragment) => {

      const navbar = document.querySelector('#navbar');
      if (navbar?.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        const navbarToggle = document.querySelector('.mobile-nav-toggle')
        navbarToggle?.classList.toggle('bi-list')
        navbarToggle?.classList.toggle('bi-x')
      }

      const hashLocation = '#' + fragment;
      if (this.isSelectorValid(hashLocation)) {
        if (document.querySelector(hashLocation)) {
          this.scrollService.smoothScrollTo(hashLocation)
        }
      }
    })
  }


}
