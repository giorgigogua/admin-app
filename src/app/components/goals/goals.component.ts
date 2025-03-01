import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BarChartComponent } from '../charts/bar-chart/bar-chart.component';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrl: './goals.component.scss',
  standalone: true,
  imports: [CommonModule]

})
export class GoalsComponent {
  goals = [
    {
      name: 'Increase monthly revenue',
      price: '$10,000',
      date: 'mar 15',
      icon: 'bi bi-circle-fill text-primary '
    },
    {
      name: 'Launch new feature',
      price: 'Dark mode',
      date: 'mar 15',
      icon: 'bi bi-circle-fill text-danger '
    },
    {
      name: 'Grow user base',
      price: '75%',
      date: 'mar 15',
      icon: 'bi bi-circle-fill text-primary '
    },
    {
      name: 'Improve customer satisfaction',
      price: '85%',
      date: 'mar 15',
      icon: 'bi bi-circle-fill text-warning '
    },
    {
      name: 'Reduce response time',
      price: '1hr',
      date: 'mar 15',
      icon: 'bi bi-circle-fill text-success '
    }
  ]
}
