import { Pipe, PipeTransform } from '@angular/core';
import { Post } from './post.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Pipe({
  name: 'category',
  pure: false
})
export class CategoryPipe implements PipeTransform {
  posts: FirebaseListObservable<any[]>;

  transform(input: Post[], category: string) {

    var output: Post[] = [];
    debugger;
    console.log("hello");
    if (category === "personals") {
      for (var i = 0; i<input.length; i++) {
        if (input[i].category === "personals") {
          output.push(input[i]);
        }
      }
    } else if (category === "community") {
      for (var i = 0; i<input.length; i++) {
        if (input[i].category === "community") {
          output.push(input[i]);
        }
      }
    } else if (category === "housing") {
      for (var i = 0; i<input.length; i++) {
        if (input[i].category === "housing") {
          output.push(input[i]);
        }
      }
    }
    return output;
  }

}
