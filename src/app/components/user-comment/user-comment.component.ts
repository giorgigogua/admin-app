import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { StarRatingComponent } from '../star-rating/star-rating.component';

@Component({
  selector: 'app-user-comment',
  templateUrl: './user-comment.component.html',
  standalone: true,
  imports: [CommonModule, StarRatingComponent]
})
export class UserCommentComponent {

  @Input() dropdown?: boolean
  @Input() rating?: boolean

  @Input() userRating?: number

}
