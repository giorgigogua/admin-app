import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss',
  standalone:true,
  imports:[ReactiveFormsModule, CommonModule]
})
export class OrderComponent {

  @Input() modalId: string = 'rightModal';
  @Input() title: string = 'Modal Title';

}
