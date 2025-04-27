import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ECommerceRoutingModule } from './e-commerce-routing.module';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PricingComponent } from './pricing/pricing.component';
import { PricingCardComponent } from '../../components/pricing-card/pricing-card.component';
import { PageTitleComponent } from '../../components/page-title/page-title.component';
import { AccordionComponent } from '../../components/accordion/accordion.component';
import { OrderSelectFilterComponent } from '../../components/order-select-filter/order-select-filter.component';
import { PagerComponent } from '../../components/pager/pager.component';
import { CustomersTableComponent } from '../../components/customers-table/customers-table.component';
import { TableComponent } from "../../components/table/table.component";
import { StatusComponent } from "../../components/status/status.component";
import { StarRatingComponent } from "../../components/star-rating/star-rating.component";


@NgModule({
  declarations: [
    ProductsComponent,
    OrdersComponent,
    InvoiceComponent,
    PricingComponent
  ],
  imports: [
    CommonModule,
    ECommerceRoutingModule,
    PricingCardComponent,
    PageTitleComponent,
    AccordionComponent,
    OrderSelectFilterComponent,
    PagerComponent,
    CustomersTableComponent,
    TableComponent,
    StatusComponent,
    StarRatingComponent
]
})
export class ECommerceModule { }
