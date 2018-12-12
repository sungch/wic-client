import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './product';
import { ProductService } from './product.service';
import {GlobalDataServivce} from '../shared/global.data.servivce';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  errorMessage = '';
  activityLog = '';
  product: IProduct | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ProductService,
              private dataService: GlobalDataServivce) {
  }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getProduct(id);
    }
  }

  getProduct(id: number) {
    this.product = this.dataService.products.find(product => product.id === id);
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

  onAddToShoppingCart() {
    const orderedProd = this.findProduct();
    if (this.dataService.orderedProducts.length > 0 && orderedProd != null) {
      this.overrideQuantity(orderedProd);
    } else {
      this.addItem();
    }
  }

  findProduct() {
    return this.dataService.orderedProducts.find( item => item.id === this.product.id );
  }

  overrideQuantity(orderedProd: IProduct) {
      orderedProd.quantity = this.product.quantity;
      this.activityLog = 'Modified quantity:' + this.product.name + ': ' + this.product.quantity;
  }

  addItem() {
    this.dataService.orderedProducts.push(this.product);
    this.activityLog = 'Added to shopping cart:' + this.product.name + ': ' + this.product.quantity;
  }
}
