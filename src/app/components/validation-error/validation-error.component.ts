import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-validation-error',
  templateUrl: './validation-error.component.html',
  styleUrl: './validation-error.component.scss',
  standalone: true,
  imports: [CommonModule]
})
export class ValidationErrorComponent {


  @Input() control: any;
  @Input() errorMessages: { [key: string]: string } = {};


  getErrorMessages(): string[] {
    if (!this.control?.errors) {
      return [];
    }

    return Object.keys(this.control.errors).map(errorKey => {
      return this.errorMessages[errorKey] || `Error: ${errorKey}`;
    });
  }

}
