import { Component } from '@angular/core';
import { barChartOptions } from '../../../helpers/barChartOptions';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss',
  standalone:true,

})
export class BarChartComponent {

  barChart = new Chart(barChartOptions)
}
