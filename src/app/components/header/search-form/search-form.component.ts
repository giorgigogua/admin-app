import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { BellComponent } from '../../bell/bell.component';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  standalone: true,
  imports: [TranslateModule, BellComponent]
})
export class SearchFormComponent {

}
