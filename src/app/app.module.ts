import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './modules/dashboard/default/default.component';
import { ChartModule } from 'angular-highcharts';
import { BarChartComponent } from './components/charts/bar-chart/bar-chart.component';
import { SearchFormComponent } from './components/header/search-form/search-form.component'
import { CryptoComponent } from './modules/dashboard/crypto/crypto.component';
import { GoalsComponent } from './components/goals/goals.component';
import { TableComponent } from './components/table/table.component';
import { RecentActivityComponent } from './components/recent-activity/recent-activity.component';
import { LineChartComponent } from './components/charts/line-chart/line-chart.component';
import { PieChartComponent } from './components/charts/pie-chart/pie-chart.component';
import { SaasComponent } from './modules/dashboard/saas/saas.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { BrowseAllComponent } from './components/browse-all/browse-all.component';
import { CustomersComponent } from './modules/customer/customers/customers.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DefaultComponent,
    BarChartComponent,
    SearchFormComponent,
    CryptoComponent,
    GoalsComponent,
    TableComponent,
    RecentActivityComponent,
    LineChartComponent,
    PieChartComponent,
    SaasComponent,
    AccordionComponent,
    BrowseAllComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
