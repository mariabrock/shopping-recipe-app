import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.user.pipe(
      take(1), // take allows us to take the 1st things it finds and ends the subscription.
      //this means we won't have to worry about it running indefinitely
      map(user =>{
      const isAuth = !!user; // !user ? false : true;
      if(isAuth) {
        return true;
      }
      return this.router.createUrlTree(['/auth']);
    })
      // this is the manual way to re-route, we won't use it here b/c of the URLTree capability
      // we will leave it here as an example
      // tap(isAuth => {
      //   if (!isAuth) {
      //     this.router.navigate(['/auth']);
      //   }
      // })
    );
  }

}
