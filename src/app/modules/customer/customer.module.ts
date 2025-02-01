import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomersComponent } from './customers/customers.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { GridListComponent } from '../../components/grid-list/grid-list.component';
import { UserCardComponent } from '../../components/user-card/user-card.component';
import { FilterBoxComponent } from '../../components/filter-box/filter-box.component';
import { UploadTableComponent } from '../../components/upload-table/upload-table.component';
import { TableComponent } from '../../components/table/table.component';
import { PageTitleComponent } from '../../components/page-title/page-title.component';


@NgModule({
  declarations: [
    CustomersComponent,
    NewCustomerComponent,
    CustomerDetailComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    GridListComponent, UserCardComponent, FilterBoxComponent, TableComponent, UploadTableComponent, PageTitleComponent
  ]
})
export class CustomerModule { }
