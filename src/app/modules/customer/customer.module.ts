import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomersComponent } from './customers/customers.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { GridListComponent } from '../../components/grid-list/grid-list.component';
import { UserCardComponent } from '../../components/user-card/user-card.component';
import { UploadTableComponent } from '../../components/upload-table/upload-table.component';
import { PageTitleComponent } from '../../components/page-title/page-title.component';
import { OrderSelectFilterComponent } from '../../components/order-select-filter/order-select-filter.component';
import { CustomersTableComponent } from '../../components/customers-table/customers-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagerComponent } from '../../components/pager/pager.component';
import { ValidationErrorComponent } from '../../components/validation-error/validation-error.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    CustomersComponent,
    NewCustomerComponent,
    CustomerDetailComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    GridListComponent,
    UserCardComponent,
    CustomersTableComponent,
    UploadTableComponent,
    PageTitleComponent,
    OrderSelectFilterComponent,
    FormsModule,
    PagerComponent,
    ReactiveFormsModule,
    ValidationErrorComponent,
    TranslateModule
  ]
})
export class CustomerModule { }
