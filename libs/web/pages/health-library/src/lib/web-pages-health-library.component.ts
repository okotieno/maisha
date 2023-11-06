import { ChangeDetectionStrategy, Component, HostListener, signal } from '@angular/core';
import { AsyncPipe, JsonPipe, NgForOf, NgStyle } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, IsActiveMatchOptions, RouterLink, RouterLinkActive } from '@angular/router';
import { map, switchMap, tap } from 'rxjs';
import { HealthLibraryService } from '@maisha/shared/services/health-library';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

export interface IHealthLibrary {
  title:       string;
  description: string;
  slug:        string;
  info:        Info[];
}

export interface Info {
  title:       string;
  description: string;
  slug: string;
}

@Component({
  selector: 'maisha-web-pages-health-library',
  standalone: true,
  imports: [MatButtonModule, NgForOf, RouterLink, RouterLinkActive],
  templateUrl: './web-pages-health-library.component.html',
  styleUrls: ['./web-pages-health-library.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebPagesHealthLibraryComponent {

  fixedSideMenu = signal(false);
  @HostListener('window:scroll', ['$event']) private onScroll($event:Event):void {
    this.fixedSideMenu.set(window.scrollY > 245);
  };
  healthLibrarySlug$ = this.route.paramMap.pipe(
    map((params) => params.get('healthLibrarySlug'))
  )
  healthLibrary$ = this.healthLibrarySlug$.pipe(
    switchMap((slug) => this.healthLibraryService.getLibrary(slug as string))
  )
  healthLibrary = signal<IHealthLibrary>({description: '', info: [], slug: '', title: ''})
  constructor(private route: ActivatedRoute, private healthLibraryService: HealthLibraryService) {
    this.healthLibrary$.pipe(
      tap((res) => this.healthLibrary.set(res as IHealthLibrary)),
      takeUntilDestroyed()
    ).subscribe()
  }

  routerLinkActiveOptions: IsActiveMatchOptions = {
    fragment: 'exact',
    paths: 'exact',
    queryParams: 'ignored',
    matrixParams: 'ignored'
  }

}
