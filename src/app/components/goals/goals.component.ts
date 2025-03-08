import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProgressCircleComponent } from "../progress-circle/progress-circle.component";

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  standalone: true,
  imports: [CommonModule, ProgressCircleComponent]

})
export class GoalsComponent {
  goals = [
    {
      name: 'Increase monthly revenue',
      price: '$10,000',
      date: 'mar 15',
      icon: 'bi bi-circle-fill text-primary ',
      color: 'blue',
      percent: 75
    },
    {
      name: 'Launch new feature',
      price: 'Dark mode',
      date: 'mar 15',
      icon: 'bi bi-circle-fill text-danger ',
      color: 'yellow',
      percent: 50

    },
    {
      name: 'Grow user base',
      price: '75%',
      date: 'mar 15',
      icon: 'bi bi-circle-fill text-primary ',
      color: 'red',
      percent: 45


    },
    {
      name: 'Improve customer satisfaction',
      price: '85%',
      date: 'mar 15',
      icon: 'bi bi-circle-fill text-warning ',
      color: 'blue',
      percent: 60

    },
    {
      name: 'Reduce response time',
      price: '1hr',
      date: 'mar 15',
      icon: 'bi bi-circle-fill text-success ',
      color: 'green',
      percent: 100

    }
  ]
}
