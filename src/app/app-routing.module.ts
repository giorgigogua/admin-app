import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './modules/dashboard/default/default.component';

const routes: Routes = [
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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
