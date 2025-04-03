import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { BarChartService } from '../../../services/bar-chart.service';

@Component({
  selector: 'app-saas',
  templateUrl: './saas.component.html',
  styleUrl: './saas.component.scss',
  providers: [BarChartService]
})
export class SaasComponent implements OnInit {

  constructor(private barChartService: BarChartService) {

  }

  barOptions: any
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
  chart: any


  ngOnInit(): void {

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
