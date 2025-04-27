import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-action',
  templateUrl: './user-action.component.html',
  styleUrl: './user-action.component.scss',
  standalone: true,
  imports: [CommonModule]
})
export class UserActionComponent {


  users: any = [
    {
      name: 'Emily T',
      action: 'Commented on your post',
      time: '5 minutes ago',
      comment: 'Love the new dashboard layout! Super clean and easy to navigate 🔥',
      img: 'https://yevgenysim-turkey.github.io/dashbrd/assets/img/photos/photo-1.jpg'
    },
    {
      name: 'Michael J',
      action: 'requested changes on your post',
      time: '10 minutes ago',
      comment: 'Could you update the revenue chart with the latest data? Thanks!',
      img: 'https://yevgenysim-turkey.github.io/dashbrd/assets/img/photos/photo-2.jpg',
    }
  ]

}
