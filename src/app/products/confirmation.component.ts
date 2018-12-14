import {Component, OnInit} from '@angular/core';

import {DataServivce} from '../shared/data.service';
import {ProductService} from '../shared/product.service';
import {Router} from '@angular/router';
import {ICustomer} from './customer';


@Component({
  templateUrl: './confirmation.component.html',
  styleUrls: ['../shared/wic.css']
})

export class ConfirmationComponent implements OnInit {
  imageWidth = 50;
  customer: ICustomer;
  wicId: string;
  surname: string;
  givenname: string;
  phoneNumber: string;
  deliveryAddress: string;

  constructor(private productService: ProductService, public dataService: DataServivce, private router: Router) {

  }

  ngOnInit(): void {
    this.wicId = this.dataService.customer[0].wicId;
    this.surname = this.dataService.customer[0].surname;
    this.givenname = this.dataService.customer[0].givenname;
    this.phoneNumber = this.dataService.customer[0].phoneNumber;
    this.deliveryAddress = this.dataService.customer[0].deliveryAddress;
  }

  onHome(): void {
    this.router.navigate(['/welcome']);
  }

  saveAndPost() {
    this.save();
    // compose customer data, order data to meet accept tyoe of server post wicCustomerOrder
    // abd do this.productService.post
  }

  saveAndHome() {
    this.save();
    this.onHome();
  }

  save() {
    this.dataService.customer[0] = {
      'wicId': this.wicId,
      'surname': this.surname,
      'givenname': this.givenname,
      'phoneNumber': this.phoneNumber,
      'deliveryAddress': this.deliveryAddress
    };
  }
}
