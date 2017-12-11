import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { ShoppingCartService } from './shopping-cart/shopping-cart.service';
import { AccountService } from './account/account.service';
import { PageNotFoundComponent } from './page-not-found.component';
import { AuthGuard } from './auth-guard.service';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    CoreModule.forRoot({ userName: 'Guest' }),
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  providers: [ShoppingCartService, AccountService, AuthGuard]
})
export class AppModule {}
