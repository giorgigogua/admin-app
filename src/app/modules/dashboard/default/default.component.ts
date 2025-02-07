import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrl: './default.component.scss',
})
export class DefaultComponent implements OnInit {
  ngOnInit(): void {
    
  }

  gridList: any = [
    {
      name: 'Earned',
      price: '$1250',
      icon:'bi bi-credit-card-fill text-primary',
    },
    {
      name: 'Hours Logged',
      price: '35.5 hrs',
      icon:'bi bi-alarm-fill text-primary',
    },
    {
      name: 'Avg. time',
      price: '2:55 hrs',
      icon:'bi bi-reception-4 text-primary',
    },
    {
      name: 'Weekly growth',
      price: '14.5%',
      icon:'bi bi-percent text-primary',
    },
  ]

  
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
