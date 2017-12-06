import { Component } from '@angular/core';
import { ShoppingCartService } from './shopping-cart/shopping-cart.service';
import { AccountService } from './account/account.service';
import { Account } from './account/account';
import {
  ActivatedRoute,
  ParamMap,
  Router,
  NavigationEnd
} from '@angular/router';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/pairwise';
import { Observable } from 'rxjs/Observable';
import { getTestBed } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  currentLink = '';
  constructor(
    private shoppingCartService: ShoppingCartService,
    private accountService: AccountService,
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log('event = ', event);
        this.currentLink = event.url;
      }
    });
  }

  get shoppingCartItemAmount(): number {
    return this.shoppingCartService.totalAmount;
  }

  get greet(): string {
    return `Welcome, ${
      this.accountService.isLogin ? this.accountService.accountName : 'Guest'
    }`;
  }
  get isLogin(): boolean {
    return this.accountService.isLogin;
  }

  logout() {
    this.accountService.logout();
  }
}
