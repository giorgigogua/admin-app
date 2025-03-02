import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrdersComponent } from './orders/orders.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PricingComponent } from './pricing/pricing.component';
import { PageTitleComponent } from '../../components/page-title/page-title.component';
import { TableComponent } from '../../components/table/table.component';
import { PricingCardComponent } from '../../components/pricing-card/pricing-card.component';
import { AccordionComponent } from '../../components/accordion/accordion.component';
import { OrderSelectFilterComponent } from "../../components/order-select-filter/order-select-filter.component";
import { PagerComponent } from '../../components/pager/pager.component';


@NgModule({
  declarations: [
  PricingComponent,
  OrdersComponent,
  InvoiceComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    PricingCardComponent,
    PageTitleComponent,
    AccordionComponent,
    TableComponent,
    CommonModule,
    OrderSelectFilterComponent,
    PagerComponent
]
})
export class OrderModule { }
