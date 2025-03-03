import { Component } from '@angular/core';
import { LineChartService } from '../../../services/line-chart.service';

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  providers:[LineChartService]
})
export class ProjectOverviewComponent {

}
