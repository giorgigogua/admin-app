import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables)


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss',
  standalone: true

})
export class PieChartComponent implements OnInit {


  public config: any = {
    type: 'doughnut',
    data: {
      datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(15, 105, 165)',
          'rgb(54, 162, 235)',
          'rgb(83, 159, 209)',
          'rgb(140, 197, 235)'
        ],
        hoverOffset: 4
      }]
    }

  };

  chart: any

  ngOnInit(): void {

    this.chart = new Chart('pieChart', this.config)

  }




}
