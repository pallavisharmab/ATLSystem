import { Component } from '@angular/core';
import { Router , Event , NavigationStart, NavigationEnd, NavigationError, NavigationCancel} from '@angular/router';
import { slideInAnimation } from './app.animation';
import { LocalAuthService } from './services/localauth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]
})
export class AppComponent {
  title = 'ATLSystem-Any Time Library';
  loading = true;
  userType = '';

  get isLoggedIn(): boolean {
    this.localauthService.userType.subscribe(value => this.userType = value);
    return this.localauthService.isLoggedIn;
  }

  get isAdmin(): boolean {
   return this.localauthService.currentUser.isAdmin;
  }
  get userName(): string {
    if (this.localauthService.currentUser) {
      return this.localauthService.currentUser.userName;
    }
    return '';
  }
  get userpic(): string {
    if (this.localauthService.currentUser) {
      return this.localauthService.currentUser.image;
    }
    return '';
  }

 constructor(private localauthService: LocalAuthService,
             private router: Router,
             ) {
  router.events.subscribe((routerEvent: Event) => {
    this.checkRouterEvent(routerEvent);
  });
 }

 checkRouterEvent(routerEvent: Event): void {
  if (routerEvent instanceof NavigationStart) {
    this.loading = true;
  }

  if (routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError) {
    this.loading = false;
  }
}


logOut(): void {
  this.localauthService.logout();
  this.localauthService.userType.subscribe(value => this.userType = value);
  this.router.navigateByUrl('/home');
}


}
