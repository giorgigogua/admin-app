import { transition } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { booleanAttribute, Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-card',
  templateUrl: './post-list-card.component.html',
  styleUrl: './post-list-card.component.scss',
  standalone: true,
  imports: [CommonModule]

})
export class PostListCardComponent {

  @Input() title: any = ''
  @Input() content: any = ''
  @Input() date: any = ''
  @Input() listDropDownItemOne: any = ''
  @Input() listDropDownItemTwo: any = ''
  @Input() listDropDownItemThree: any = ''
  @Input() img: any = ''
  @Input({ transform: booleanAttribute }) image: boolean = false

}
