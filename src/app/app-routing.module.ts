import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './modules/dashboard/default/default.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard/default',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultComponent
  },
  {
    path: "dashboard",
    loadChildren: () => import("./modules/dashboard/dashboard.module").then(m => m.DashboardModule)
  },
  {
    path: "account",
    loadChildren: () => import("./modules/account/account.module").then(m => m.AccountModule)
  },
  {
    path: "e-commerce",
    loadChildren: () => import("./modules/e-commerce/e-commerce.module").then(m => m.ECommerceModule)
  },
  {
    path: "customer",
    loadChildren: () => import("./modules/customer/customer.module").then(m => m.CustomerModule)
  },
  {
    path: "order",
    loadChildren: () => import("./modules/order/order.module").then(m => m.OrderModule)
  },
  {
    path: "post",
    loadChildren: () => import("./modules/post/post.module").then(m => m.PostModule)
  },
  {
    path: "project",
    loadChildren: () => import("./modules/project/project.module").then(m => m.ProjectModule)
  },
  {
    path: "authentication",
    loadChildren: () => import("./modules/authentication/authentication.module").then(m => m.AuthenticationModule)
  },
  {
    path: "other",
    loadChildren: () => import("./modules/other/other.module").then(m => m.OtherModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
