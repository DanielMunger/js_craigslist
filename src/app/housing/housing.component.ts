import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { Router } from '@angular/router';
import { PostService } from '../post.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-housing',
  templateUrl: './housing.component.html',
  styleUrls: ['./housing.component.css'],
  providers: [PostService]
})
export class HousingComponent implements OnInit {
  posts: FirebaseListObservable<any[]>;

  constructor(private router: Router, private postService: PostService, private angularFire: AngularFire){
    this.posts = angularFire.database.list('posts');
  }


  // getItem ( uid: string ) {
  //   return this.posts.uid;
  // }

    categoryToFilter = "housing";


    ngOnInit() {
      this.posts = this.postService.getPosts();
    }

    goToDetailPage(clickedPost: Post) {
    this.router.navigate([clickedPost.category+'/posts', clickedPost.id]);
  };

}
