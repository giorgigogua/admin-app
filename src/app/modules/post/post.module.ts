import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { CategoriesComponent } from './categories/categories.component';
import { PostsComponent } from './posts/posts.component';
import { NewPostComponent } from './new-post/new-post.component';
import { PostListCardComponent } from '../../components/post-list-card/post-list-card.component';
import { PageTitleComponent } from '../../components/page-title/page-title.component';
import { FilterBoxComponent } from '../../components/filter-box/filter-box.component';
import { PostCardComponent } from '../../components/post-card/post-card.component';


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
    FilterBoxComponent,
    PostCardComponent
  ]
})
export class PostModule { }
