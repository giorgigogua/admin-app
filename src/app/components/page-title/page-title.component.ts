import { CommonModule } from '@angular/common';
import { booleanAttribute, Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  standalone: true,
  imports: [CommonModule]

})
export class PageTitleComponent {

  @Input() titleOne: any = ''
  @Input() titleTwo: any = ''
  @Input() titleThree: any = ''
  @Input() buttonText: any = ''
  @Input() editButton: any = ''
  @Input() deleteButton: any = ''
  @Input({ transform: booleanAttribute }) buttons: boolean = false
  @Input() icon: any = ''
  @Input() buttonClick:any = ''

}
