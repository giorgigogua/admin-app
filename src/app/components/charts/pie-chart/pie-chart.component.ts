import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { PieChartService } from '../../../services/pie-chart.service';

Chart.register(...registerables)


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss',
  standalone: true

})
export class PieChartComponent implements OnInit {

  constructor(private pieService: PieChartService) {

  }

  pieList: any
  pieData: any[] = []


  chart: any

  ngOnInit(): void {

    this.pieService.getPie().subscribe((data: any) => {
      this.pieList = data

      if (this.pieList != null) {

        for (let i = 0; i < this.pieList.length; i++) {

          this.pieData.push(this.pieList[i].data)

        }

      }
    })

    this.showPie(this.pieData)

  }

  showPie(pieData: any) {
    this.chart = new Chart('pieChart', {
      type: 'doughnut',
      data: {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: '',
          data: pieData,
          backgroundColor: [
            'rgb(15, 105, 165)',
            'rgb(54, 162, 235)',
            'rgb(83, 159, 209)',
            'rgb(140, 197, 235)'
          ],
          hoverOffset: 4
        }]
      }
    })
  }




}
