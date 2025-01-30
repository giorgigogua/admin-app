import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrl: './grid-list.component.scss'
})
export class GridListComponent {

  @Input() title: any = ''
  @Input() content: any = ''


}
