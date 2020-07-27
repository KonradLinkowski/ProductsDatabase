import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/services/auth/auth.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLoggedIn = false;
  mobileLayout = false;

  constructor(private router: Router, public authService: AuthService, private breakpointObserver: BreakpointObserver) {
    this.authService.isAuthenticated().subscribe(data => {
      this.isLoggedIn = !!data;
    });
    this.breakpointObserver.observe([
      Breakpoints.XSmall
    ]).subscribe(result => {
      this.mobileLayout = result.matches;
    });
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  logout() {
    this.authService.logout().subscribe();
  }
}
