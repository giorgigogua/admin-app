import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { CategoriesComponent } from './categories/categories.component';
import { PostsComponent } from './posts/posts.component';
import { NewPostComponent } from './new-post/new-post.component';
import { PostListCardComponent } from '../../components/post-list-card/post-list-card.component';
import { PageTitleComponent } from '../../components/page-title/page-title.component';
import { PostCardComponent } from '../../components/post-card/post-card.component';
import { TopAuthorsComponent } from '../../components/top-authors/top-authors.component';
import { OrderSelectFilterComponent } from "../../components/order-select-filter/order-select-filter.component";


@NgModule({
  declarations: [
    PostsComponent,
    NewPostComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    PostListCardComponent,
    PageTitleComponent,
    PostCardComponent,
    TopAuthorsComponent,
    OrderSelectFilterComponent
]
})
export class PostModule { }
