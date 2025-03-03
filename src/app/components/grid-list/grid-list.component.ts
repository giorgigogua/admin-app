import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  standalone:true,
  imports:[CommonModule]

})
export class GridListComponent {

  @Input() title: any = ''
  @Input() content: any = ''
  @Input() icon: any = ''



}
