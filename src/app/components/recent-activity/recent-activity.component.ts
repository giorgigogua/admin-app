import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recent-activity',
  templateUrl: './recent-activity.component.html',
  styleUrl: './recent-activity.component.scss'
})
export class RecentActivityComponent {

  @Input() name:string = ''
  @Input() title:string = ''
  @Input() time:string = ''
  @Input() activity:string = ''
}
