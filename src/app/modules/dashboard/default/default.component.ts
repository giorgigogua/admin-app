
import { Component, OnInit } from '@angular/core';
import { GridListService } from '../../../services/grid-list.service';
import { RecentActivityService } from '../../../services/recent-activity.service';
import { Chart } from 'chart.js';
import { BarChartService } from '../../../services/bar-chart.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  providers: [GridListService, RecentActivityService, BarChartService]
})
export class DefaultComponent implements OnInit {

  gridListItem: any
  cryptoListItem: any
  barOptions: any
  labels: any[] = []
  dataOne: any[] = []
  dataTwo: any[] = []
  background: any[] = []
  background2: any[] = []
  chart: any

  constructor(private gridListService: GridListService, private recentActivityService: RecentActivityService, private barChartService: BarChartService) {


    this.gridListService.getGridList().subscribe((data: any) => {
      this.gridListItem = data
    })

    this.recentActivityService.getCryptoList().subscribe((data: any) => {

      this.cryptoListItem = data

    })

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
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


    this.chart = new Chart("defaultChart", {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: '',
            data: dataOne,
            backgroundColor: background,
            borderRadius: 50,
            barPercentage: 0.5,
            minBarLength: 2,
          },
          {
            label: '',
            data: dataTwo,
            backgroundColor: background2,
            borderRadius: 50,
            barPercentage: 0.5,
            minBarLength: 2,
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
