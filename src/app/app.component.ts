import { Component } from '@angular/core';
import { Router ,Event ,NavigationStart,NavigationEnd,NavigationError, NavigationCancel} from '@angular/router';
import { slideInAnimation } from './app.animation';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]
})
export class AppComponent {
  title = 'ATLSystem-Any Time Library';
  loading= true;

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  
  
  get isAdmin(): boolean{
   return this.authService.currentUser.isAdmin;
  }
  get userName(): string {
    if (this.authService.currentUser) {
      return this.authService.currentUser.userName;
    }
    return '';
  }

 constructor(private authService: AuthService,
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
  this.authService.logout();
  this.router.navigateByUrl('/home');
}


}
