import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-browse-all',
  templateUrl: './browse-all.component.html',
  styleUrl: './browse-all.component.scss'
})
export class BrowseAllComponent {
  
  @Input() title:any = ''

}
