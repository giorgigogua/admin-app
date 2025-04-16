import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  standalone:true,
  imports:[CommonModule,ReactiveFormsModule]
})
export class ProductComponent {
  @Input() modalId: string = 'rightModal';
  @Input() title: string = 'Modal Title';
}
