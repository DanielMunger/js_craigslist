import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { Router } from '@angular/router';
import { PostService } from '../post.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css'],
  providers: [PostService]
})
export class CommunityComponent implements OnInit{
  posts: FirebaseListObservable<any[]>;


  constructor(private router: Router, private postService: PostService){}

  categoryToFilter = "community";

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }

  goToDetailPage(clickedPost: Post) {
    this.router.navigate([clickedPost.category+'/posts', clickedPost.id]);
  }
}
