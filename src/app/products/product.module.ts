import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';
import {DataServivce} from '../shared/data.service';
import {ConfirmationComponent} from './confirmation.component';
import {CheckoutComponent} from './checkoutout.component';


@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      {
        path: 'products/:id',
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent
      },
      {path: 'confirmation', component: ConfirmationComponent },
      {path: 'checkout', component: CheckoutComponent },
    ]),
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConfirmationComponent,
    CheckoutComponent,
    ConvertToSpacesPipe
  ],
  providers: [ DataServivce ]
})
export class ProductModule { }
