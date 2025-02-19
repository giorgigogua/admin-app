import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { LineChartService } from '../../../services/line-chart.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.scss',
  standalone: true

})
export class LineChartComponent implements OnInit {

  lineData: any

  labels: any[] = []
  datas: any[] = []


  constructor(private lineChartService: LineChartService) {


  }





  chart: any


  ngOnInit(): void {

    this.lineChartService.getLineData().subscribe((data: any) => {
      this.lineData = data


      if (this.lineData != null) {
        for (let i = 0; i < this.lineData.length; i++) {

          this.labels.push(this.lineData[i].label)
          this.datas.push(this.lineData[i].data)
        }
      }
      this.showChart(this.labels, this.datas);
    })



  }

  showChart(labels: any, datas: any) {
    this.chart = new Chart('MyChart', {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: '',
          data: datas,
          fill: false,
          borderColor: 'blue',
          tension: 0.1
        }]
      }
    })
  }



}
