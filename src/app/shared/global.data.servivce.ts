import { Injectable } from '@angular/core';
import {IProduct} from '../products/product';


@Injectable()
export class GlobalDataServivce {

  private _products: IProduct[] = [];

  get products() {
    return this._products;
  }

  set products(value: IProduct[]) {
    this._products = value;
  }
}
