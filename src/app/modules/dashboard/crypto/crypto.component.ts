
import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../../../services/crypto.service';
import { CryptoTableInterface } from '../../../interfaces/crypto-table';
import { LineChartService } from '../../../services/line-chart.service';
import { PieChartService } from '../../../services/pie-chart.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrl: './crypto.component.scss',
  providers: [CryptoService, LineChartService, PieChartService]
})
export class CryptoComponent implements OnInit {

  validationForm: FormGroup

  constructor(private cryptoTableListService: CryptoService) {

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
    change: '',
    lastHour: '',
    icon: ''
  }

  refresh(): void {
    window.location.reload();
  }


  createList() {
    this.cryptoTableListService.createCryptoTableList(this.cryptoTableFormData).subscribe({
      next: (data) => {
        this.closeModel()
        this.refresh()
      }, error: (err) => {
        console.log(err)
      }
    })
  }

  ngOnInit(): void {

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







  cryptoListItem: any = [
    {
      name: 'Bought 1.5 BTC',
      date: 'Oct 1',
      activity: 'Transaction completed on Coinbase',
      icon: 'bi bi-hand-thumbs-up-fill'
    },
    {
      name: 'Bought 1.5 BTC',
      date: 'Oct 1',
      activity: 'Transaction completed on Coinbase',
      icon: 'bi bi-chat-left-fill'
    },
    {
      name: 'Bought 1.5 BTC',
      date: 'Oct 1',
      activity: 'Transaction completed on Coinbase',
      icon: 'bi bi-share-fill'
    },
    {
      name: 'Bought 1.5 BTC',
      date: 'Oct 1',
      activity: 'Transaction completed on Coinbase',
      icon: 'bi bi-person-circle'
    }
  ]
}
