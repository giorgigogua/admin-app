import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class NavService {

  showNavbar: BehaviorSubject<boolean>

  constructor() {
    this.showNavbar = new BehaviorSubject(true)
  }



  hideNav() {
    this.showNavbar.next(false)
  }


  showNav() {
    this.showNavbar.next(true)
  }
}
