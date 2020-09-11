import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class AboutGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    const login = JSON.parse(sessionStorage.getItem('Login'));
    console.log(login);
    if (login) {
      return true;
    } else {
      this.router.navigate(['login']);
    }
    return false;
  }

}
