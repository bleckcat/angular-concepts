import { HttpClient, HttpEventType } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class SigninService {
  private http = inject(HttpClient);

  signin(username: string, password: string) {
    const body = { username, password };
    return this.http
      .post(`${environment.apiUrl}/auth/signin`, body, {
        reportProgress: true,
        observe: 'events',
      })
      .subscribe({
        next: (event) => {
          if (event.type === HttpEventType.Response) {
            console.log('Response received:', event.body);
          }
        },
        error: (error) => {
          console.error('Upload failed:', error);
        },
      });
  }
}
