import { Component, Input, OnInit } from "@angular/core";
import { Post } from "../post.model";
import { PostsService } from "../posts.service";

@Component({
  selector: "app-post-list-item",
  templateUrl: "./post-list-item.component.html",
  styleUrls: ["./post-list-item.component.scss"]
})
export class PostListItemComponent implements OnInit {
  @Input() post: Post;
  @Input() index: number;

  constructor(private postService: PostsService) {}

  ngOnInit() {}

  onLoveIt() {
    this.postService.addLike(this.index);
  }

  onDontLoveIt() {
    this.postService.unLike(this.index);
  }

  removePost(){
    this.postService.removePost(this.post)
  }
}
