import { CommonModule } from '@angular/common';
import { booleanAttribute, Component, Input } from '@angular/core';

@Component({
  selector: 'app-order-select-filter',
  templateUrl: './order-select-filter.component.html',
  standalone:true,
  imports:[CommonModule]
})
export class OrderSelectFilterComponent {

  @Input({transform:booleanAttribute}) selectedContact:boolean = false

  @Input({ transform: booleanAttribute }) publDrafts: boolean = false

  @Input() filterBoxSpan: any = ''
  @Input() published: any = ''
  @Input() drafts: any = ''

}
