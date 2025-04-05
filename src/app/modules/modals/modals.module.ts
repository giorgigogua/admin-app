import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalsRoutingModule } from './modals-routing.module';
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './order/order.component';
import { EventComponent } from './event/event.component';


@NgModule({
  declarations: [
    ProductComponent,
    OrderComponent,
    EventComponent
  ],
  imports: [
    CommonModule,
    ModalsRoutingModule
  ]
})
export class ModalsModule { }
