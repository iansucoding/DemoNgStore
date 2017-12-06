import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'product', loadChildren : 'app/product/product.module#ProductModule'},
  {path: 'shopping-cart', loadChildren : 'app/shopping-cart/shopping-cart.module#ShoppingCartModule'},
  {path: 'account' , loadChildren: 'app/account/account.module#AccountModule'}
];

@NgModule({
  imports: [
    HomeModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
