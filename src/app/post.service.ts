import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { POSTS } from './mock-posts';

@Injectable()
export class PostService {

  constructor() { }

  getPosts()
  {
    return POSTS;
  }

  getPostById(postId) {
    for (var i = 0; i <= POSTS.length -1; i++) {
      if (POSTS[i].id === parseInt(postId)) {
        return POSTS[i];
      }
    }
  }

}
