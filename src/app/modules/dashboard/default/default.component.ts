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
    },
    {
      name: 'Hours Logged',
      price: '35.5 hrs',
    },
    {
      name: 'Avg. time',
      price: '2:55 hrs',
    },
    {
      name: 'Weekly growth',
      price: '14.5%',
    },
  ]

}
