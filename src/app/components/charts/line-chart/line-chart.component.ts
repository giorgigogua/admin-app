import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { LineChartService } from '../../../services/line-chart.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  standalone: true

})
export class LineChartComponent implements OnInit {

  lineData: any

  labels: any[] = []
  labels2: any[] = []
  labels3: any[] = []
  data: any[] = []
  data2: any[] = []
  data3: any[] = []



  constructor(private lineChartService: LineChartService) {


  }





  chart: any


  ngOnInit(): void {

    this.lineChartService.getHomeLine().subscribe((data: any) => {
      this.lineData = data


      if (this.lineData != null) {
        for (let i = 0; i < this.lineData.length; i++) {

          this.labels.push(this.lineData[i].label)
          this.data.push(this.lineData[i].data)
        }
      }
      this.homeChart(this.labels, this.data);

    })

    this.lineChartService.getProfileLine().subscribe((data: any) => {
      this.lineData = data


      if (this.lineData != null) {
        for (let i = 0; i < this.lineData.length; i++) {

          this.labels2.push(this.lineData[i].label)
          this.data2.push(this.lineData[i].data2)
        }
      }
      this.profileChart(this.labels2, this.data2);

    })

    this.lineChartService.getContactLine().subscribe((data: any) => {
      this.lineData = data


      if (this.lineData != null) {
        for (let i = 0; i < this.lineData.length; i++) {

          this.labels3.push(this.lineData[i].label)
          this.data3.push(this.lineData[i].data3)
        }
      }
      this.contactChart(this.labels3, this.data3);

    })





  }

  @Input() lineChartId = ''

  homeChart(labels: any, data: any) {
    this.chart = new Chart('homeChart', {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: '',
          data: data,
          fill: false,
          borderColor: 'blue',
          tension: 0.1
        }]
      }
    })
  }

  profileChart(labels2: any, data2: any) {
    this.chart = new Chart('profileChart', {
      type: 'line',
      data: {
        labels: labels2,
        datasets: [{
          label: '',
          data: data2,
          fill: false,
          borderColor: 'blue',
          tension: 0.1
        }]
      }
    })
  }

  contactChart(labels3: any, data3: any) {
    this.chart = new Chart('contactChart', {
      type: 'line',
      data: {
        labels: labels3,
        datasets: [{
          label: '',
          data: data3,
          fill: false,
          borderColor: 'blue',
          tension: 0.1
        }]
      }
    })
  }



}
