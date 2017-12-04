import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  template: `
  <h3 highlight>Product Detail</h3>
  <div>Product id : {{ id }}</div>
  <br>
  <a routerLink="../list">Product List</a>
  `
})
export class ProductDetailComponent implements OnInit {
  id: number;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
  }
}
