import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule.forRoot({userName: 'Guest'}),
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
