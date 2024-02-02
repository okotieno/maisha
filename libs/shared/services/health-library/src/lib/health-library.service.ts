import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HealthLibraryService {
  constructor(private http: HttpClient) {
  }

  getLibraries = () => {
    return this.http.get<{ title: string; description: string; slug: string; }[]>('/assets/health-library.json').pipe(
      shareReplay()
    );
  };
  getLibrary = (lib: string) => {
    return this.http.get(`/assets/health-library-${lib}.json`).pipe(
      shareReplay()
    );
  };

  getBlog = (slug: string) =>
    this.http.get(`/assets/blogs/${slug}.html`, {
      responseType: 'text'
    }).pipe(
      shareReplay()
    );
}
