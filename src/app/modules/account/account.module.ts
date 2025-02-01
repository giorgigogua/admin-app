import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountOverviewComponent } from './account-overview/account-overview.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PageTitleComponent } from '../../components/page-title/page-title.component';


@NgModule({
  declarations: [
    AccountOverviewComponent,
    AccountSettingsComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    PageTitleComponent
  ]
})
export class AccountModule { }
