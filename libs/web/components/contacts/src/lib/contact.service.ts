import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private api = ''; 

  constructor(private http: HttpClient) {}

  PostMessage(input: any): Observable<any> {
    return this.http.post(this.api, input, { responseType: 'text' });
  }
}
