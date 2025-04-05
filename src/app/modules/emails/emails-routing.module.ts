import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountConfirmationComponent } from './account-confirmation/account-confirmation.component';
import { NewPostComponent } from './new-post/new-post.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { ProductUpdateComponent } from './product-update/product-update.component';

const routes: Routes = [
  { path: 'account-confirmation', component: AccountConfirmationComponent },
  { path: 'new-post', component: NewPostComponent },
  { path: 'order-confirmation', component: OrderConfirmationComponent },
  { path: 'password-reset', component: PasswordResetComponent },
  { path: 'product-update', component: ProductUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailsRoutingModule { }
