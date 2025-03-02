import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-top-authors',
  templateUrl: './top-authors.component.html',
  styleUrl: './top-authors.component.scss',
  standalone: true,
  imports: [CommonModule]
})
export class TopAuthorsComponent {

  @Input() firstName = ''
  @Input() image = ''
  @Input() mail = ''


}
