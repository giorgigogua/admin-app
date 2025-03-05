import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-validation-error-message',
  templateUrl: './validation-error.component.html',
  standalone: true,
  imports: [CommonModule, TranslateModule]
})
export class ValidationErrorComponent {


  @Input() control: any;


}
