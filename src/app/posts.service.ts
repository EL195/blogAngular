import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();

  constructor(private httpClient: HttpClient) {
    this.getPosts();
  }
//Méthode permettant d'émettre les posts
  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  savePosts(){
    this.httpClient
      .put('https://micheltanga.com/ng-blog/posts.json', this.posts)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
    //Accès aux différents changement de l'objet
    this.emitPosts();
  }

  addPost(post: Post){
    this.posts.push(post);
    this.savePosts();
  }

  removePost(post: Post){
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if(postEl === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.savePosts();
  }

  getPosts() {
    this.httpClient
      .get<any[]>('https://micheltanga.com/ng-blog/posts.json')
      .subscribe(
        (response) => {
          this.posts = response;
          this.emitPosts();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  addLike(i: number){
    this.posts[i].loveIts += 1;
    this.savePosts();
  }

  unLike(i: number){
    if(this.posts[i].loveIts>0){
      this.posts[i].loveIts = this.posts[i].loveIts - 1;
      this.savePosts();
    }

  }
}
