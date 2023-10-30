import {
  AfterViewInit,
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  QueryList,
  Renderer2, signal,
  ViewChild
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { IconService } from '@furaha/shared/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'furaha-web-header',
  standalone: true,
  templateUrl: 'header.component.html',
  imports: [
    MatIconModule,
    MatButtonModule
  ],
  styleUrls: ['header.component.scss']
})

export class HeaderComponent implements AfterViewInit {
  @ViewChild('navbar') navbar?: ElementRef<any>
  navbarOpen = signal(false);

  constructor(private renderer: Renderer2, iconService: IconService) {
    iconService.registerIcons(['menu', 'close'])
  }

  ngAfterViewInit(): void {

    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        this.scrollTo(window.location.hash)
      }
    }
    const navbarLinks: QueryList<HTMLAnchorElement> = this.navbar?.nativeElement.querySelectorAll('.scrollto');
    navbarLinks.forEach((navbarlink) => {
      const position = window.scrollY + 200
      if (!navbarlink.hash) return
      const section = document.querySelector(navbarlink.hash) as HTMLDivElement;
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        this.renderer.addClass(navbarlink, 'active')
      } else {
        this.renderer.removeClass(navbarlink, 'active')
      }
    })
  }

  @HostBinding('class.header-scrolled') isHeaderScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Check the scroll position and toggle the 'header-scrolled' class accordingly
    this.isHeaderScrolled = window.scrollY > 100;
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

      this.scrollTo(e.target.hash)
    }
  }

  scrollTo = (el: string) => {
    const header = document.querySelector('#header') as HTMLDivElement
    const offset = header?.offsetHeight

    const elementPos = (document.querySelector(el) as HTMLDivElement).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  toggleNavBar() {
    this.navbarOpen.set(!this.navbarOpen());
    // document.querySelector('#navbar')?.classList.toggle('navbar-mobile')
    // this.classList.toggle('bi-list')
    // this.classList.toggle('bi-x')
  }
}
