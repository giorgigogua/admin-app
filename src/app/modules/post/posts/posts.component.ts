import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
})
export class PostsComponent {


  constructor(private router: Router) {

  }


  navigateClick() {
    this.router.navigate(['/post/post'])
    console.log('ss')
  }

}
