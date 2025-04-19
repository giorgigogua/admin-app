import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-comment',
  templateUrl: './user-comment.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class UserCommentComponent {

  @Input() dropdown: boolean | undefined
}
