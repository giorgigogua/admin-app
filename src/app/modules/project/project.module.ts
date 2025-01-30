import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectOverviewComponent } from './project-overview/project-overview.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { TableComponent } from '../../components/table/table.component';
import { PageTitleComponent } from '../../components/page-title/page-title.component';


@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectOverviewComponent,
    NewProjectComponent,
    TableComponent,
    PageTitleComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule
  ]
})
export class ProjectModule { }
