
import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
})
export class CategoriesComponent {

  categories: any = [
    {
      topTitle: '12 followers',
      title: 'Announcments',
      postLength: '20 posts',
      img: 'bi bi-person text-primary',
      backgroundColor: 'bg-warning'
    },
    {
      topTitle: '12 followers',
      title: 'Announcments',
      postLength: '20 posts',
      img: 'bi bi-person text-primary',
      backgroundColor: 'bg-primary-subtle',
      desc: 'Cards are built they offer easy alignment and mix well with other Bootstrap components. They have no margin by default, so use spacing utilities as needed.'
    },
    {
      topTitle: '12 followers',
      title: 'Announcments',
      postLength: '20 posts',
      img: 'bi bi-person text-primary',
      backgroundColor: 'bg-success-subtle'
    },
    {
      topTitle: '12 followers',
      title: 'Announcments',
      postLength: '20 posts',
      img: 'bi bi-person text-primary',
      backgroundColor: 'bg-warning-subtle'
    },
    {
      topTitle: '12 followers',
      title: 'Announcments',
      postLength: '20 posts',
      img: 'bi bi-person text-primary',
      backgroundColor: 'bg-light'
    }, 
    {
      topTitle: '12 followers',
      title: 'Announcments',
      postLength: '20 posts',
      img: 'bi bi-person text-primary',
      backgroundColor: 'bg-danger-subtle',
      desc:'Cards are built with as little markup and styles as possible, but still manage to deliver a ton of control and customization. Built with flexbox, they offer easy alignment and mix well with other Bootstrap components. They have no margin by default, so use spacing utilities as needed.'
    },
  ]

}
