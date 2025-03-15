import { CommonModule } from '@angular/common';
import { booleanAttribute, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-order-select-filter',
  templateUrl: './order-select-filter.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class OrderSelectFilterComponent {

  @Input() filterBoxSearchControl: FormControl = new FormControl('');

  @Input({ transform: booleanAttribute }) selectedContact: boolean = false

  @Input({ transform: booleanAttribute }) publDrafts: boolean = false
  @Input({ transform: booleanAttribute }) noSelected: boolean = false

  @Input() filterBoxSpan: any = ''
  @Input() published: any = ''
  @Input() drafts: any = ''

  @Output() statusChange = new EventEmitter<string>();

  @Input() statuses: string[] = []


  onStatusChange(event: Event) {
    const status = (event.target as HTMLSelectElement);
    this.statusChange.emit(status.value);
  }

}
