import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pricing-card',
  templateUrl: './pricing-card.component.html',
  styleUrl: './pricing-card.component.scss',
  standalone: true,
  imports: [CommonModule]

})
export class PricingCardComponent {
  @Input() title: any = ''
  @Input() desc: any = ''
  @Input() price: any = ''
  @Input() date: any = ''
  @Input() list: any = ''
  @Input() list2: any = ''
  @Input() list3: any = ''
  @Input() list4: any = ''

  @Input() buttonText: string = ''



}
