import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { AccountService } from './account/account.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private accountService: AccountService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {

    return this.checkLogin(state.url);
  }

  checkLogin(url: string): boolean {
    if (this.accountService.isLogin) {
      return true;
    }

    // Navigate to the login page with returnUrl
    this.router.navigate(['/account/login', { returnUrl: url }]);
    return false;
  }
}
