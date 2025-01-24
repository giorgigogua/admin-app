import { Component } from '@angular/core';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrl: './goals.component.scss'
})
export class GoalsComponent {
  goals = [
    {
      name: 'Increase monthly revenue',
      price: '$10,000',
      date: 'mar 15'
    },
    {
      name: 'Launch new feature',
      price: 'Dark mode',
      date: 'mar 15'
    },
    {
      name: 'Grow user base',
      price: '75%',
      date: 'mar 15'
    },
    {
      name: 'Improve customer satisfaction',
      price: '85%',
      date: 'mar 15'
    },
    {
      name: 'Reduce response time',
      price: '1hr',
      date: 'mar 15'
    }
  ]
}
