import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountOverviewComponent } from './account-overview/account-overview.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

const routes: Routes = [
    { path: "account-overview", component: AccountOverviewComponent },
    { path: "account-setting", component: AccountSettingsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
