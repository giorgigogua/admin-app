import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrdersComponent } from './orders/orders.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PricingComponent } from './pricing/pricing.component';
import { TableComponent } from '../../components/table/table.component';
import { PageTitleComponent } from '../../components/page-title/page-title.component';
import { FilterBoxComponent } from '../../components/filter-box/filter-box.component';


@NgModule({
  declarations: [
    OrdersComponent,
    InvoiceComponent,
    PricingComponent,
    TableComponent,
    PageTitleComponent,
    FilterBoxComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
