import { Component, inject, OnInit } from '@angular/core';
import { CheckAuthService } from '../../services/check-auth.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styles: ``,
})
export class Home implements OnInit {
  private authService = inject(CheckAuthService);
  ngOnInit(): void {
    this.authService.checkLocalAuth();
  }
}
