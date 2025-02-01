import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectOverviewComponent } from './project-overview/project-overview.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { PageTitleComponent } from '../../components/page-title/page-title.component';


@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectOverviewComponent,
    NewProjectComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    PageTitleComponent
  ]
})
export class ProjectModule { }
