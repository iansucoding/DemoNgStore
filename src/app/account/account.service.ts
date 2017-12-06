import { Injectable } from '@angular/core';
import { Account } from './account';

// 假設server端的db裡有兩筆帳號
const ACCOUNTS: Account[] = [
  {id: 1, name: 'peter', email: 'peter@mail.com', role: 'admin'},
  {id: 2, name: 'bob', email: 'bob@mail.com', role: 'user'}
];

@Injectable()
export class AccountService {
  account: Account;
  login(email: string, password: string): boolean {
    const acc = ACCOUNTS.find(a => a.email === email);
    if (acc && password === '0000') {
      this.account = acc;
      return true;
    }
    return false;
  }
  logout() {
    this.account = null;
  }

  get isLogin(): boolean {
    return !!this.account;
  }

  get accountName(): string {
    return this.account ? this.account.name : '';
  }
}
