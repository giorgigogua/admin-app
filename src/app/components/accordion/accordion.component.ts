import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  standalone: true
})
export class AccordionComponent {


  @Input() title: string = ''
  @Input() content: string = ''
  @Input() date: string = ''
  @Input() dataBsTarget: string = ''


}
