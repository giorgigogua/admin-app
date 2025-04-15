import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailsRoutingModule } from './emails-routing.module';
import { AccountConfirmationComponent } from './account-confirmation/account-confirmation.component';
import { NewPostComponent } from './new-post/new-post.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { TopAuthorsComponent } from "../../components/top-authors/top-authors.component";


@NgModule({
  declarations: [
    AccountConfirmationComponent,
    NewPostComponent,
    OrderConfirmationComponent,
    PasswordResetComponent,
    ProductUpdateComponent
  ],
  imports: [
    CommonModule,
    EmailsRoutingModule,
    TopAuthorsComponent
]
})
export class EmailsModule { }
