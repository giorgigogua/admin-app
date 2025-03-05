import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountOverviewComponent } from './account-overview/account-overview.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PageTitleComponent } from '../../components/page-title/page-title.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidationErrorComponent } from '../../components/validation-error/validation-error.component';


@NgModule({
  declarations: [
    AccountOverviewComponent,
    AccountSettingsComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    PageTitleComponent,
    FormsModule,
    ReactiveFormsModule,
    ValidationErrorComponent
  ]
})
export class AccountModule { }
