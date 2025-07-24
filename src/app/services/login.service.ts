import { HttpClient, HttpEventType } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private http = inject(HttpClient);
  private router = inject(Router);

  login(username: string, password: string) {
    const body = { username, password };
    this.http
      .post(`${environment.apiUrl}/auth/login`, body, {
        reportProgress: true,
        observe: 'events',
      })
      .subscribe({
        next: (event) => {
          if (event.type === HttpEventType.ResponseHeader) {
            if (event.status === 200 && event.ok) {
              this.router.navigate(['/']);
              localStorage.setItem('authenticated', 'yes');
            }
          }
        },
        error: (error) => {
          console.error('Upload failed:', error);
        },
      });
  }
}
