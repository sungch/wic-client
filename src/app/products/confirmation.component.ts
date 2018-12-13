import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';
import { ProductService } from './product.service';
import {GlobalDataServivce} from '../shared/global.data.servivce';


@Component({
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})

export class ConfirmationComponent {
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

  constructor(private productService: ProductService, public dataService: GlobalDataServivce) {

  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.dataService.products.filter((product: IProduct) =>
      product.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  checkoutOrders() {
    // Ask if check customer information and order information are all correct.
    // Give a chance to edit customer info
    // Give instruction on how to edit orders
  }

  cancelAllOrders() {
    if (confirm('Are you sure to calcel ALL your order selections?')) {
      this.dataService.orderedProducts.splice(0, this.dataService.orderedProducts.length);
    }
  }

  cancelOrder(product: IProduct) {
    if (confirm('Are you sure to cancel this item(' + product.name + ')?')) {
      const index = this.findProductIndex(product.id);
      this.dataService.orderedProducts.splice(index, 1);
    }
  }

  findProductIndex(id: number) {
    return this.dataService.orderedProducts.findIndex(item => item.id === id);
  }

}
