import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.scss'
})
export class PostCardComponent {

  @Input() icon: any = ''
  @Input() title: any = ''
  @Input() topTitle: any = ''
  @Input() desc: any = ''
  @Input() postLength: any = ''
  @Input() backgroundColor: any = ''



}
