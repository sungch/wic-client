import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';
import { ProductService } from '../shared/product.service';
import {DataServivce} from '../shared/data.service';
import {Router} from '@angular/router';


@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['../shared/wic.css']
})

export class ProductListComponent implements OnInit {
  pageTitle = 'Search or Pick a product name to Order';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage = '';

  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.dataService.products;
  }

  filteredProducts: IProduct[] = [];

  constructor(private productService: ProductService, public dataService: DataServivce, private router: Router) {

  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.dataService.products.filter((product: IProduct) =>
      product.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    if (!this.dataService.products || this.dataService.products.length <= 0) {
      this.productService.getProducts().subscribe(
          list => {
            this.dataService.products = list;
            this.filteredProducts = this.dataService.products;
          },
          error => this.errorMessage = <any>error
      );
    } else {
      this.filteredProducts = this.dataService.products;
    }
  }

  cancelAllOrders() {
    if (confirm('Are you sure to cancel ALL your orders?')) {
      this.dataService.orderedProducts.splice(0, this.dataService.orderedProducts.length);
    }
  }

  cancelOrder(product: IProduct) {
    if (confirm('Are you sure to cancel this item(' + product.name + ' (qty:' + product.quantity + ')?')) {
      const index = this.findProductIndex(product.id);
      this.dataService.orderedProducts.splice(index, 1);
    }
  }

  findProductIndex(id: number) {
    return this.dataService.orderedProducts.findIndex(item => item.id === id);
  }

  confirmInformation() {
    this.router.navigate(['/confirmation']);
  }
}
