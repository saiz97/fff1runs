import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isNavVisible: boolean = false;
  isAuthenticated = false;
  private userSub: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }

  openNav() {
    this.isNavVisible = !this.isNavVisible;
  }

  closeNav() {
    this.isNavVisible = !this.isNavVisible;
  }

  onLogout() {
    this.authService.logout();
    this.closeNav();
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
