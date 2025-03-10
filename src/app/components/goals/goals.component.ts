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
      desc: '$10,000',
      date: 'Mar 15',
      icon: 'bi bi-circle-fill text-primary ',
      color: 'blue',
      percent: 75
    },
    {
      name: 'Launch new feature',
      desc: 'Dark mode',
      date: 'Oct 01',
      icon: 'bi bi-circle-fill text-danger ',
      color: 'yellow',
      percent: 50

    },
    {
      name: 'Grow user base',
      desc: '75%',
      date: 'Dec 12',
      icon: 'bi bi-circle-fill text-primary ',
      color: 'red',
      percent: 45


    },
    {
      name: 'Improve customer satisfaction',
      desc: '85%',
      date: 'Dec 15',
      icon: 'bi bi-circle-fill text-warning ',
      color: 'blue',
      percent: 60

    },
    {
      name: 'Reduce response time',
      desc: '1hr',
      date: 'Jan 01',
      icon: 'bi bi-circle-fill text-success ',
      color: 'green',
      percent: 100

    }
  ]
}
