import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AccountRoutingModule } from './account-routing.module';
import { AccountLoginComponent } from './account-login.component';


@NgModule({
  declarations: [AccountLoginComponent],
  imports: [ CommonModule, FormsModule, AccountRoutingModule],
})
export class AccountModule {}
