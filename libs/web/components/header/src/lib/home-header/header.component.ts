import {
  AfterViewInit,
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
  signal,
  ViewChild
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { IconService } from '@furaha/shared/icon';
import { MatButtonModule } from '@angular/material/button';
import { ScrollService } from '@maisha/shared/services/scroll';
import { ActivatedRoute, IsActiveMatchOptions, RouterLink, RouterLinkActive } from '@angular/router';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'furaha-web-header',
  standalone: true,
  templateUrl: 'header.component.html',
  imports: [
    MatIconModule,
    MatButtonModule,
    RouterLink,
    NgForOf,
    RouterLinkActive
  ],
  styleUrls: ['header.component.scss']
})

export class HeaderComponent implements AfterViewInit {
  @ViewChild('navbar') navbar?: ElementRef<any>
  navbarOpen = signal(false);

  constructor(
    private renderer: Renderer2, iconService: IconService,
    private scrollService: ScrollService,
    private route: ActivatedRoute
  ) {
    iconService.registerIcons(['menu', 'close'])
  }

  ngAfterViewInit(): void {

    this.loadGoogleTranslateScript();
    // this.route.fragment.subscribe((fragment) => {
    //   const hashLocation = '#' + fragment;
    //   if (this.isSelectorValid(hashLocation)) {
    //     if (document.querySelector(hashLocation)) {
    //       this.scrollService.smoothScrollTo(hashLocation)
    //     }
    //   }
    // })
  }

  @HostBinding('class.header-scrolled') isHeaderScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Check the scroll position and toggle the 'header-scrolled' class accordingly
    this.isHeaderScrolled = window.scrollY > 100;
  }

  isSelectorValid(selector: string) {
    if (selector === '#') return false;
    // Regular expression to match common CSS selector patterns
    const selectorRegex = /^([a-zA-Z0-9-_*#.\s>+~:[\]=|^$,)(]+)+$/;
    return selectorRegex.test(selector);
  }

  handleScrollToClick(e: any) {
    if (document.querySelector(e.target.hash)) {
      e.preventDefault();
      const navbar = document.querySelector('#navbar');
      if (navbar?.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        const navbarToggle = document.querySelector('.mobile-nav-toggle')
        navbarToggle?.classList.toggle('bi-list')
        navbarToggle?.classList.toggle('bi-x')
      }

      this.scrollService.smoothScrollTo(e.target.hash)
    }
  }


  toggleNavBar() {
    this.navbarOpen.set(!this.navbarOpen());
    // document.querySelector('#navbar')?.classList.toggle('navbar-mobile')
    // this.classList.toggle('bi-list')
    // this.classList.toggle('bi-x')
  }

  links = signal([
    {slug: 'hero', label: 'Home'},
    {slug: 'about', label: 'About Us'},
    {slug: 'health-library', label: 'Health Library'},
    {slug: 'team', label: 'Our Team'},
    {slug: 'contact', label: 'Contact Us'},
    {slug: 'project', label: 'Our Projects'},
  ])
  routerLinkActiveOptions: IsActiveMatchOptions = {
    fragment: 'exact',
    paths: 'exact',
    queryParams: 'exact',
    matrixParams: 'exact'
  }

  loadGoogleTranslateScript() {
    const script = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.text = `
    function googleTranslateElementInit() {
      new google.translate.TranslateElement({
        pageLanguage: 'en',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        includedLanguages: 'en,fr,sw'
      }, 'google_translate_element');
    }
  `;

    const scriptSrc = this.renderer.createElement('script');
    scriptSrc.type = 'text/javascript';
    scriptSrc.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';

    this.renderer.appendChild(document.head, script);
    this.renderer.appendChild(document.head, scriptSrc);
  }
}
