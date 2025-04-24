import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.scss',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class StarRatingComponent {

  @Input() rating: any = 0;
  @Input() maxStars: number = 5;

  @Output() ratingChange = new EventEmitter<number>();

}
