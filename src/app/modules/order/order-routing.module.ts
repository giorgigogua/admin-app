import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PricingCardComponent } from '../../components/pricing-card/pricing-card.component';

const routes: Routes = [
    { path: "order", component: OrdersComponent},
    { path: "invoice", component: InvoiceComponent },
    { path: "pricing", component: PricingCardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
