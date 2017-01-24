import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { Router } from '@angular/router';
import { PostService } from '../post.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-personals',
  templateUrl: './personals.component.html',
  styleUrls: ['./personals.component.css'],
  providers: [PostService]
})
export class PersonalsComponent implements OnInit {
  constructor(private router: Router, private postService: PostService){}
  posts: FirebaseListObservable<any[]>;

  categoryToFilter = "personals";

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }

  goToDetailPage(clickedPost: Post) {
  this.router.navigate([clickedPost.category+'/posts', clickedPost.id]);
};

}
