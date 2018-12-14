import {Component, OnInit} from '@angular/core';
import {DataServivce} from '../shared/data.service';


@Component({
  templateUrl: './checkout.component.html',
  styleUrls: ['../shared/wic.css']
})

export class CheckoutComponent implements OnInit {

  checkoutOrders() {
    // send request to server
      // present order number
      // and other instruction
  }

    constructor(public dataService: DataServivce) {
        // this.wicId = dataService.customer.wicId;
        // this.surname = dataService.customer.surname;
    }

  ngOnInit(): void {
  }

}
