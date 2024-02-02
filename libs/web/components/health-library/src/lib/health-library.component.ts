import { Component, OnInit, signal } from '@angular/core';
import { JsonPipe, NgForOf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { HealthLibraryService } from '@maisha/shared/services/health-library';
import { tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'furaha-health-library',
  standalone: true,
  imports: [
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './health-library.component.html',
  styleUrls: ['./health-library.component.scss']
})
export class HealthLibraryComponent {
  constructor(private libraryService: HealthLibraryService) {
    this.libraryService.getLibraries().pipe(
      tap((res) => {
        this.healthLibraries.set(res);
      }),
      takeUntilDestroyed()
    ).subscribe();
  }

  healthLibraries = signal<{ title: string; description: string; slug: string; }[]>([]);
}
