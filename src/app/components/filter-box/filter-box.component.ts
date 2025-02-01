import { booleanAttribute, Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter-box',
  templateUrl: './filter-box.component.html',
  styleUrl: './filter-box.component.scss',
  standalone:true

})
export class FilterBoxComponent {

  @Input({ transform: booleanAttribute }) isInput: boolean = false
  @Input({ transform: booleanAttribute }) publDrafts: boolean = false

  @Input() filterBoxSpan: any = ''
  @Input() published: any = ''
  @Input() drafts: any = ''
}
