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
import { PageTitleComponent } from './components/page-title/page-title.component';
import { ProjectsComponent } from './modules/project/projects/projects.component';
import { OrdersComponent } from './modules/order/orders/orders.component';
import { InvoiceComponent } from './modules/order/invoice/invoice.component';
import { FilterBoxComponent } from './components/filter-box/filter-box.component';
import { PricingComponent } from './modules/order/pricing/pricing.component';
import { PricingCardComponent } from './components/pricing-card/pricing-card.component';
import { AccountOverviewComponent } from './modules/account/account-overview/account-overview.component';
import { CategoriesComponent } from './modules/post/categories/categories.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { PostsComponent } from './modules/post/posts/posts.component';
import { PostListCardComponent } from './components/post-list-card/post-list-card.component';
import { GridListComponent } from './components/grid-list/grid-list.component';

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
    CustomersComponent,
    PageTitleComponent,
    ProjectsComponent,
    OrdersComponent,
    InvoiceComponent,
    FilterBoxComponent,
    PricingComponent,
    PricingCardComponent,
    AccountOverviewComponent,
    CategoriesComponent,
    PostCardComponent,
    PostsComponent,
    PostListCardComponent,
    GridListComponent
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
