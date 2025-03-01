import { Component, Input, OnInit } from '@angular/core';
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
  providers: [BarChartService]


})
export class BarChartComponent implements OnInit {

  barOptions: any
  labels: any[] = []
  homelabels: any[] = []
  profileLabels: any[] = []
  contactLabels: any[] = []
  homeBarData: any[] = []
  profileBarData: any[] = []
  contactBarData: any[] = []
  dataOne: any[] = []
  dataTwo: any[] = []
  background: any[] = []
  background2: any[] = []
  homeBarbackgroundColor: any[] = []
  profileBarbackgroundColor: any[] = []
  contactBarbackgroundColor: any[] = []

  @Input() chartHeight = ''



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

    this.barChartService.getHomeBarData().subscribe((data: any) => {
      this.barOptions = data


      if (this.barOptions != null) {
        for (let i = 0; i < this.barOptions.length; i++) {

          this.homelabels.push(this.barOptions[i].label)
          this.homeBarData.push(this.barOptions[i].homeBarData)
          this.homeBarbackgroundColor.push(this.barOptions[i].homeBarbackgroundColor)



        }
      }

      this.homeChart(this.homeBarData, this.homelabels, this.homeBarbackgroundColor);


    })


    this.barChartService.getProfileBarData().subscribe((data: any) => {
      this.barOptions = data


      if (this.barOptions != null) {
        for (let i = 0; i < this.barOptions.length; i++) {

          this.profileLabels.push(this.barOptions[i].label)
          this.profileBarData.push(this.barOptions[i].profileBarData)
          this.profileBarbackgroundColor.push(this.barOptions[i].profileBarbackgroundColor)



        }
      }

      this.profileChart(this.profileBarData, this.profileLabels, this.profileBarbackgroundColor);


    })

    this.barChartService.getContactBarData().subscribe((data: any) => {
      this.barOptions = data


      if (this.barOptions != null) {
        for (let i = 0; i < this.barOptions.length; i++) {

          this.contactLabels.push(this.barOptions[i].label)
          this.contactBarData.push(this.barOptions[i].contactBarData)
          this.contactBarbackgroundColor.push(this.barOptions[i].backgroundColor)



        }
      }

      this.contactChart(this.contactBarData, this.contactLabels, this.contactBarbackgroundColor);



    })




  }

  @Input() chartId = ''

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

  homeChart(homeBarData: any, homelabels: any, homeBarbackgroundColor: any) {
    console.log(homeBarData)

    this.chart = new Chart("homeChart", {
      type: 'bar',
      data: {
        labels: homelabels,
        datasets: [
          {
            label: '',
            data: homeBarData,
            backgroundColor: homeBarbackgroundColor,
            borderRadius: 50,
            barPercentage: 0.3,
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

  profileChart(profileBarData: any, profileLabels: any, profileBarbackgroundColor: any) {

    this.chart = new Chart("profile", {
      type: 'bar',
      data: {
        labels: profileLabels,
        datasets: [
          {
            label: '',
            data: profileBarData,
            backgroundColor: profileBarbackgroundColor,
            borderRadius: 50,
            barPercentage: 0.3,

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

  contactChart(contactBarData: any, contactLabels: any, contactBarbackgroundColor: any,) {

    this.chart = new Chart("contact", {
      type: 'bar',
      data: {
        labels: contactLabels,
        datasets: [
          {
            label: '',
            data: contactBarData,
            backgroundColor: contactBarbackgroundColor,
            borderRadius: 50,
            barPercentage: 0.3,
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          },

        }
      },
    })

  }




}
