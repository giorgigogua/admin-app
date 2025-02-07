import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.scss',
  standalone: true

})
export class LineChartComponent implements OnInit {

  config: any = {
    type: 'line',
    data: {
      labels: ['Jan 01', 'Jan 05', 'Jan 08', 'Jan 09', 'Jan 11', 'Jan 15', 'Jan 17', 'Jan 25'],
      datasets: [{
        label: '',
        data: [65, 59, 80, 81, 56, 55, 40, 45],
        fill: false,
        borderColor: 'blue',
        tension: 0.1
      }]
    }
  };

  chart: any


  ngOnInit(): void {

    this.chart = new Chart('MyChart', this.config)


  }



}
