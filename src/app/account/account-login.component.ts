import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';

import { AccountService } from './account.service';

@Component({
  templateUrl: './account-login.component.html'
})
export class AccountLoginComponent implements OnInit {

  returnUrl = '';
  model = {email: '', password: ''};
  isLoginFail = false;
  constructor(
    private accountService: AccountService,
    private router: Router,
    private route: ActivatedRoute
  ) {

  }
  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.paramMap.get('returnUrl');
    if (!this.returnUrl) {
      this.returnUrl = 'home';
    }
  }

  onSubmit() {
    const isLogginSuccess = this.accountService.login(this.model.email, this.model.password);
    if (isLogginSuccess) {
      console.log('登入成功');
      this.isLoginFail = false;
      this.router.navigate([this.returnUrl]);
    } else {
      console.log('登入失敗');
      this.isLoginFail = true;
    }
  }
}
