import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-housing',
  templateUrl: './housing.component.html',
  styleUrls: ['./housing.component.css'],
  providers: [PostService]
})
export class HousingComponent implements OnInit {

  constructor(private router: Router, private postService: PostService){}

    posts: Post[];

    ngOnInit() {
      this.posts = this.postService.getPosts();
    }
    
    goToDetailPage(clickedPost: Post) {
    this.router.navigate([clickedPost.category+'/posts', clickedPost.id]);
  };

}
