import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DefaultComponent } from './default/default.component';
import { CryptoComponent } from './crypto/crypto.component';
import { SaasComponent } from './saas/saas.component';
import { BarChartComponent } from '../../components/charts/bar-chart/bar-chart.component';
import { GoalsComponent } from '../../components/goals/goals.component';
import { TableComponent } from '../../components/table/table.component';
import { RecentActivityComponent } from '../../components/recent-activity/recent-activity.component';
import { AccordionComponent } from '../../components/accordion/accordion.component';
import { BrowseAllComponent } from '../../components/browse-all/browse-all.component';
import { PostListCardComponent } from '../../components/post-list-card/post-list-card.component';


@NgModule({
  declarations: [
    DefaultComponent,
    CryptoComponent,
    SaasComponent,
    GoalsComponent,
    TableComponent,
    RecentActivityComponent,
    AccordionComponent,
    BrowseAllComponent,
    PostListCardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
