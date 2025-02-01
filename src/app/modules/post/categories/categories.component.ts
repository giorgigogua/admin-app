
import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../components/page-title/page-title.component';
import { PostCardComponent } from '../../../components/post-card/post-card.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
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
      backgroundColor: 'bg-secondary'
    },
    {
      topTitle: '12 followers',
      title: 'Announcments',
      postLength: '20 posts',
      img: 'bi bi-person text-primary',
      backgroundColor: 'bg-success'
    },
    {
      topTitle: '12 followers',
      title: 'Announcments',
      postLength: '20 posts',
      img: 'bi bi-person text-primary',
      backgroundColor: 'bg-light'
    },
  ]

}
