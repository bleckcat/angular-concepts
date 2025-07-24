import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CheckAuthService {
  private routingService = inject(Router);
  private platformId = inject(PLATFORM_ID);

  checkLocalAuth() {
    if (isPlatformBrowser(this.platformId)) {
      const isAuth = localStorage.getItem('authenticated');
      if (isAuth !== 'yes') {
        this.routingService.navigateByUrl('/login');
      }
    } else {
      this.routingService.navigateByUrl('/login');
    }
  }
}
