import { Component } from '@angular/core';
import { pieChartOptions } from '../../../helpers/pieChartOptions';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss',
  standalone:true
  
})
export class PieChartComponent {
  pieChart = new Chart(pieChartOptions)

}
