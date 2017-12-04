import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponent } from './product-list.component';
import { ProductService } from './product.service';

@NgModule({
  imports: [CommonModule, ProductRoutingModule],
  declarations : [ProductDetailComponent, ProductListComponent],
  providers: [ProductService]
})
export class ProductModule { }
