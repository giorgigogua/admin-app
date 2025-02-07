import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectOverviewComponent } from './project-overview/project-overview.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { PageTitleComponent } from '../../components/page-title/page-title.component';
import { TableComponent } from '../../components/table/table.component';
import { LineChartComponent } from '../../components/charts/line-chart/line-chart.component';
import { UserCommentComponent } from '../../components/user-comment/user-comment.component';
import { UploadTableComponent } from '../../components/upload-table/upload-table.component';


@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectOverviewComponent,
    NewProjectComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    PageTitleComponent,
    TableComponent,
    LineChartComponent,
    UserCommentComponent,
    UploadTableComponent
  ]
})
export class ProjectModule { }
