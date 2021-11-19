import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'
import { PostsService } from '../posts.service'
import { Post } from '../post.model'

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss'],
})
export class NewPostComponent implements OnInit {
  postForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private postService: PostsService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.initForm()
  }

  initForm() {
    this.postForm = this.formBuilder.group({
      title: '',
      content: '',
    })
  }

  onSubmitForm() {
    const formValue = this.postForm.value;
    const newPost = new Post(
      formValue['title'],
      formValue['content'],
      new Date()
    );
    this.postService.addPost(newPost);
    this.router.navigate(['/posts']);
  }
}
