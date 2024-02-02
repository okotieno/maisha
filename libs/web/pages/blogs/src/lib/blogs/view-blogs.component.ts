import { Component } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DomSanitizer } from '@angular/platform-browser';
import { HealthLibraryService } from '@maisha/shared/services/health-library';
import { map, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'furaha-blogs',
  standalone: true,
  imports: [],
  templateUrl: './view-blogs.component.html',
  styleUrl: './view-blogs.component.scss'
})
export class ViewBlogsComponent {
  blogSlug$ = this.route.paramMap.pipe(
    map((params) => params.get('blogSlug') as string)
  );
  blogContent$ =
    this.blogSlug$.pipe(
      switchMap((slug) => this.healthLibraryService.getBlog(slug)),
      map((res) => this.sanitizer.bypassSecurityTrustHtml(res))
    )
  ;
  blogContent = toSignal(this.blogContent$);

  constructor(
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private healthLibraryService: HealthLibraryService
  ) {
  }
}
