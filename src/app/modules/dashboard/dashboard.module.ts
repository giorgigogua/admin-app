import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SaasComponent } from './saas/saas.component';
import { PostListCardComponent } from '../../components/post-list-card/post-list-card.component';
import { PieChartComponent } from '../../components/charts/pie-chart/pie-chart.component';
import { RecentActivityComponent } from '../../components/recent-activity/recent-activity.component';
import { LineChartComponent } from '../../components/charts/line-chart/line-chart.component';
import { CryptoComponent } from './crypto/crypto.component';
import { DefaultComponent } from './default/default.component';
import { BrowseAllComponent } from '../../components/browse-all/browse-all.component';
import { TableComponent } from '../../components/table/table.component';
import { GoalsComponent } from '../../components/goals/goals.component';
import { GridListComponent } from '../../components/grid-list/grid-list.component';
import { BarChartComponent } from '../../components/charts/bar-chart/bar-chart.component';
import { AccordionComponent } from '../../components/accordion/accordion.component';


@NgModule({
  declarations: [
    SaasComponent,
    CryptoComponent,
    DefaultComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PostListCardComponent,
    PieChartComponent,
    RecentActivityComponent,
    LineChartComponent,
    BrowseAllComponent, 
    TableComponent, 
    GoalsComponent, 
    GridListComponent,
    BarChartComponent,
    AccordionComponent,
    CommonModule,
  ]
})
export class DashboardModule { }
