import { BadInputError } from './../common/bad-input-error';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { PostService } from './../services/post/post.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: any[];
  private error: any;
  private errorMessage = 'An unexpected error happened';

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.postService.getAll()
      .subscribe(
      posts => {
        this.posts = posts;
        this.error = null;
      },
      error => {
        this.error = JSON.stringify(error);
        throw error;
      });
  }

  addPost(newPost: HTMLInputElement) {
    const post = { title: newPost.value };

    this.postService.create(post)
      .subscribe(
        createdpost => {
        post['id'] = createdpost.id;
        this.posts.splice(0, 0, post);
        this.error = null;
      },
      (error: AppError) => {
        this.error = error;
        if (error instanceof BadInputError) {

        } else {
          throw error;
        }


      });

    newPost.value = '';

  }

  updatePost(post) {
    this.postService.update(post)
      .subscribe(
      updatepost => {
        console.log(updatepost);
        this.error = null;
      },
      error => {
        this.error = error;
        throw error;
      });
  }

  deletePost(post) {
    this.postService.delete(post.id)
      .subscribe(
      () => {
        const index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
        this.error = null;
      },
      (error: AppError) => {
        this.error = error;
        if (error instanceof NotFoundError) {
          this.errorMessage = 'This Post has been already deleted';
        } else {
          throw error;
        }


      });

  }


}
