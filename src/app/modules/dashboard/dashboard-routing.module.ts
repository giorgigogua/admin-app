import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { CryptoComponent } from './crypto/crypto.component';
import { SaasComponent } from './saas/saas.component';

const routes: Routes = [
  { path: "default", component: DefaultComponent },
  { path: "crypto", component: CryptoComponent },
  { path: "saas", component: SaasComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
