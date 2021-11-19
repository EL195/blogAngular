import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { PostsService } from "../posts.service";
import { Post } from "../post.model";
import { Subscription } from "rxjs";

@Component({
  selector: "app-postList",
  templateUrl: "./postList.component.html",
  styleUrls: ["./postList.component.scss"]
})
export class PostListComponent implements OnInit, OnDestroy  {
  posts: Post[] = [];
  postSubscription: Subscription;

  constructor(private postService: PostsService) {}

  ngOnInit() {
    this.postSubscription = this.postService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postService.emitPosts();
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }
}
