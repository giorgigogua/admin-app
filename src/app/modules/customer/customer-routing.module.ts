import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';

const routes: Routes = [
    { path: "customers", component: CustomersComponent},
    { path: "customer-detail", component: CustomerDetailComponent },
    { path: "new-customer", component: NewCustomerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
