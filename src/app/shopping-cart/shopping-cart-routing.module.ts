import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart.component';
import { ShoppingCartCheckoutComponent } from './shopping-cart-checkout.component';
import { AuthGuard } from '../auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'detail', pathMatch: 'full' },
  { path: 'detail', component: ShoppingCartComponent },
  {
    path: 'checkout',
    component: ShoppingCartCheckoutComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingCartRoutingModule {}
