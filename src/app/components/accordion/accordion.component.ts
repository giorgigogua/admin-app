import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss',
  standalone:true
})
export class AccordionComponent {


  @Input() title:string = ''
  @Input() content:string = ''
  @Input() date:string = ''


}
