import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',

})
export class PricingComponent {

  pricingList = [
    {
      title:'Basic',
      desc:'I am description',
      price:'$200',
      date:'2month',
      list:'list of pricing card',
      list2:'list of pricing card',
      list3:'list of pricing card',
      list4:'list of pricing card',

    },
    {
      title:'Basic',
      desc:'I am description',
      price:'$200',
      date:'2month',
      list:'list of pricing card',
      list2:'list of pricing card',
      list3:'list of pricing card',
      list4:'list of pricing card',


    },
    {
      title:'Basic',
      desc:'I am description',
      price:'$200',
      date:'2month',
      list: 'list of pricing card',
      list2:'list of pricing card',
      list3:'list of pricing card',
      list4:'list of pricing card',

    }
  ]


}
