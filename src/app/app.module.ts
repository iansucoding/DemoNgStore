import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { ShoppingCartService } from './shopping-cart/shopping-cart.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule.forRoot({userName: 'Guest'}),
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  providers: [ShoppingCartService]
})
export class AppModule { }
