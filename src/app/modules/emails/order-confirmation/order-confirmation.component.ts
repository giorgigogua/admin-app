import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavService } from '../../../services/nav.service';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrl: './order-confirmation.component.scss'
})
export class OrderConfirmationComponent implements OnInit, OnDestroy {
  constructor(private navService: NavService) {

  }


  ngOnInit(): void {
    this.navService.hideNav()
  }

  ngOnDestroy(): void {
    this.navService.showNav()
  }
}
