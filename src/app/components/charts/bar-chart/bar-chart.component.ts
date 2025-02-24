import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';
import { BarChartService } from '../../../services/bar-chart.service';

Chart.register(...registerables)

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss',
  standalone: true,
  imports: [CommonModule],
  providers:[BarChartService]


})
export class BarChartComponent implements OnInit {

  barOptions: any

  labels: any[] = []
  dataOne: any[] = []
  dataTwo: any[] = []
  background: any[] = []
  background2: any[] = []


  chart: any;

  constructor(private barChartService: BarChartService) {


  }



  ngOnInit(): void {

    this.barChartService.getBarData().subscribe((data: any) => {
      this.barOptions = data


      if (this.barOptions != null) {
        for (let i = 0; i < this.barOptions.length; i++) {

          this.labels.push(this.barOptions[i].label)
          this.dataOne.push(this.barOptions[i].dataOne)
          this.dataTwo.push(this.barOptions[i].dataTwo)
          this.background.push(this.barOptions[i].backgroundColor)
          this.background2.push(this.barOptions[i].backgroundColor2)



        }
      }

      this.showBarChart(this.dataOne, this.dataTwo, this.labels, this.background, this.background2);
    })




  }


  showBarChart(dataOne: any, dataTwo: any, labels: any, background: any, background2: any) {


    this.chart = new Chart('MyChart', {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: '',
            data: dataOne,
            backgroundColor: background,
            borderRadius: 50
          },
          {
            label: '',
            data: dataTwo,
            backgroundColor: background2,
            borderRadius: 50
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
    })

  }




}
