import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recent-activity',
  templateUrl: './recent-activity.component.html',
  styleUrl: './recent-activity.component.scss',
  standalone:true,
  imports:[CommonModule]

})
export class RecentActivityComponent {

  @Input() name:string = ''
  @Input() time:string = ''
  @Input() activity:string = ''
  @Input() icon:string = ''

  
}
