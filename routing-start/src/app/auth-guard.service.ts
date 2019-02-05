import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/observable';
import { AuthFakeService } from './auth-fake.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authFakeService: AuthFakeService, private router: Router) { }

  // It can reutrn any value synchroniously or ansynch. depends what behaviour we need
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authFakeService.isAuthentificated()
            .then(
              (authentificated: boolean) => {
                if (authentificated) {
                  return true;
                } else {
                  this.router.navigate(['/']);
                  return false;
                }
              }
            );
  }
}
