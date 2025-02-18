
import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../../../services/crypto.service';
import { CryptoTableInterface } from '../../../interfaces/crypto-table';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrl: './crypto.component.scss',
})
export class CryptoComponent implements OnInit {

  constructor(private cryptoTableListService: CryptoService) {

  }

  cryptoTableFormData: CryptoTableInterface = {
    id: 0,
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
      icon: 'bi bi-person'
    },
    {
      name: 'Bought 1.5 BTC',
      date: 'Oct 1',
      activity: 'Transaction completed on Coinbase',
      icon: 'bi bi-person'
    },
    {
      name: 'Bought 1.5 BTC',
      date: 'Oct 1',
      activity: 'Transaction completed on Coinbase',
      icon: 'bi bi-person'
    },
    {
      name: 'Bought 1.5 BTC',
      date: 'Oct 1',
      activity: 'Transaction completed on Coinbase',
      icon: 'bi bi-person'
    }
  ]
}
