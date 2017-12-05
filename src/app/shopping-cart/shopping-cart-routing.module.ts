import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart.component';

const routes: Routes = [
  { path: '', component: ShoppingCartComponent}
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingCartRoutingModule {}
