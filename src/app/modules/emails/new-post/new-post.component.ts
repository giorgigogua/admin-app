import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavService } from '../../../services/nav.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrl: './new-post.component.scss'
})
export class NewPostComponent implements OnInit, OnDestroy {
  constructor(private navService: NavService) {

  }


  ngOnInit(): void {
    this.navService.hideNav()
  }

  ngOnDestroy(): void {
    this.navService.showNav()
  }
}
