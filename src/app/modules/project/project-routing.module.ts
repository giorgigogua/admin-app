import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewProjectComponent } from './new-project/new-project.component';
import { ProjectOverviewComponent } from './project-overview/project-overview.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
    { path: "new-project", component: NewProjectComponent },
    { path: "project-overview", component: ProjectOverviewComponent },
    { path: "projects", component: ProjectsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
