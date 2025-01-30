import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomersComponent } from './customers/customers.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { PageTitleComponent } from '../../components/page-title/page-title.component';


@NgModule({
  declarations: [
    CustomersComponent,
    CustomerDetailComponent,
    NewCustomerComponent,
    PageTitleComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
