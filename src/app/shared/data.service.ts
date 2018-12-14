import { Injectable } from '@angular/core';
import {IProduct} from '../products/product';
import {ICustomer} from '../products/customer';

@Injectable()
export class DataServivce {

  private _products: IProduct[] = [];

  get products() {
    return this._products;
  }

  set products(value: IProduct[]) {
    this._products = value;
  }

  // ---

  private _customer: ICustomer[] = [];

  get customer() {
    return this._customer;
  }

  // ---

  private _orderedProducts: IProduct[] = [];

  get orderedProducts() {
    return this._orderedProducts;
  }

}
