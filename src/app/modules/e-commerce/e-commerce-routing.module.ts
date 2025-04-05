import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PricingComponent } from './pricing/pricing.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: "orders", component: OrdersComponent},
  { path: "invoice", component: InvoiceComponent },
  { path: "pricing", component: PricingComponent },
  { path: "products", component: ProductsComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ECommerceRoutingModule { }
