import { Component } from '@angular/core';
import { lineChartOptions } from '../../../helpers/lineChartOptions';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.scss'
})
export class LineChartComponent {

  lineChart = new Chart(lineChartOptions)

}
