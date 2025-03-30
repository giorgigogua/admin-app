import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ECommerceRoutingModule } from './e-commerce-routing.module';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PricingComponent } from './pricing/pricing.component';


@NgModule({
  declarations: [
    ProductsComponent,
    OrdersComponent,
    InvoiceComponent,
    PricingComponent
  ],
  imports: [
    CommonModule,
    ECommerceRoutingModule
  ]
})
export class ECommerceModule { }
