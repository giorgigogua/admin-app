import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables)

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss',
  standalone: true,
  imports: [CommonModule]


})
export class BarChartComponent implements OnInit {

  public config: any = {
    type: 'bar',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: '',
          data: ['467', '576', '572', '588', '700', '700', '700'],
          backgroundColor: 'blue'
        },
        {
          label: '',
          data: ['467', '576', '572', '700', '700', '700', '700'],
          backgroundColor: 'lightgrey'
        }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };


  chart: any;


  ngOnInit(): void {

    this.chart = new Chart('MyChart', this.config)

  }



}
