import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrl: './crypto.component.scss',
})
export class CryptoComponent implements OnInit {

  ngOnInit(): void {

  }


  cryptoList: any = [
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
