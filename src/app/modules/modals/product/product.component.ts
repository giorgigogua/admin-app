import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StarRatingComponent } from '../../../components/star-rating/star-rating.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, StarRatingComponent]
})
export class ProductComponent {
  @Input() modalId: string = 'rightModal';
  @Input() title: string = 'Modal Title';

  userRating = 5;
}
