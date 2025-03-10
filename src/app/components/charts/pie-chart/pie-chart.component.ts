import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { PieChartService } from '../../../services/pie-chart.service';
import { CommonModule } from '@angular/common';

Chart.register(...registerables)


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  standalone: true,
  imports: [CommonModule]

})
export class PieChartComponent implements OnInit {

  constructor(private pieService: PieChartService) {

  }

  pieList: any
  pieData: any[] = []

  pieBackground: any[] = []


  chart: any

  ngOnInit(): void {

    this.pieService.getPie().subscribe((data: any) => {
      this.pieList = data

      if (this.pieList != null) {

        for (let i = 0; i < this.pieList.length; i++) {

          this.pieData.push(this.pieList[i].data)
          this.pieBackground.push(this.pieList[i].backgroundColor)


        }

      }
      this.showPie(this.pieData, this.pieBackground)
    })


  }

  showPie(pieData: any, pieBackground: any) {
    this.chart = new Chart('pieChart', {
      type: 'doughnut',
      data: {
        datasets: [{
          label: '',
          data: pieData,
          backgroundColor: pieBackground,
          hoverOffset: 4,
        }]
      }
    })
  }




}