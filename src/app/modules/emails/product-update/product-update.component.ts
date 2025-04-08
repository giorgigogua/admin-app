import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavService } from '../../../services/nav.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrl: './product-update.component.scss'
})
export class ProductUpdateComponent implements OnInit, OnDestroy {
  constructor(private navService: NavService) {

  }


  ngOnInit(): void {
    this.navService.hideNav()
  }

  ngOnDestroy(): void {
    this.navService.showNav()
  }
}
