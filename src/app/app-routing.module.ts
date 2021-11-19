import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NewPostComponent } from "./new-post/new-post.component";
import { PostListComponent } from "./postList/postList.component";

const routes: Routes = [
  { path: 'posts', component: PostListComponent },
  { path: 'newpost', component: NewPostComponent },
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
