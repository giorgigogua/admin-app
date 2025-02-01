import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { CategoriesComponent } from './categories/categories.component';
import { NewPostComponent } from './new-post/new-post.component';

const routes: Routes = [
    { path: "post", component: PostsComponent },
    { path: "new-post", component: NewPostComponent },
    { path: "categories", component: CategoriesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
