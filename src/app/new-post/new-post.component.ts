import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css'],
  providers: [PostService]
})
export class NewPostComponent implements OnInit {

  constructor(private router: Router, private postService: PostService){}

 posts: Post[];
 ngOnInit() {
   this.posts = this.postService.getPosts();
 }

newPost(category:string, subcategory:string, title:string, content:string, image:string, location:string, price:number)
{
  debugger;
  var date: Date = new Date();

  var newPost: Post = new Post(category, subcategory, title, date, content, image, location, this.posts.length, price);

  this.posts.unshift(newPost);
}


}
