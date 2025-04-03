
import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../../../services/crypto.service';
import { CryptoTableInterface } from '../../../interfaces/crypto-table';
import { LineChartService } from '../../../services/line-chart.service';
import { PieChartService } from '../../../services/pie-chart.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CryptoListService } from '../../../services/crypto-list.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrl: './crypto.component.scss',
  providers: [CryptoService, LineChartService, PieChartService, CryptoListService]
})
export class CryptoComponent implements OnInit {

  validationForm: FormGroup

  cryptoListItem: any


  lineData: any

  labels: any[] = []
  labels2: any[] = []
  labels3: any[] = []
  data: any[] = []
  data2: any[] = []
  data3: any[] = []
  chart: any

  constructor(private cryptoTableListService: CryptoService, private cryptoList: CryptoListService, private lineChartService: LineChartService) {

    this.cryptoList.getCryptoList().subscribe((res) => {
      this.cryptoListItem = res
    })

    this.validationForm = new FormGroup({
      name: new FormControl("", [Validators.required]),
      lastPrice: new FormControl("", [Validators.required]),
      change: new FormControl("", [Validators.required]),
      lastHour: new FormControl("", [Validators.required])
    })

  }

  cryptoTableFormData: CryptoTableInterface = {
    name: '',
    lastPrice: '',
    change: 0,
    lastHour: '',
    icon: '',
  }

  refresh(): void {
    window.location.reload();
  }


  openModel() {
    const modelDiv = document.getElementById('myModal')

    if (modelDiv != null) {
      modelDiv.style.display = 'block'
    }
  }

  closeModel() {
    const modelDiv = document.getElementById('myModal')

    if (modelDiv != null) {
      modelDiv.style.display = 'none'
    }
  }

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
