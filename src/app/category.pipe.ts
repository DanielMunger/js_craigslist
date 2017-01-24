import { Pipe, PipeTransform } from '@angular/core';
import { Post } from './post.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Pipe({
  name: 'category',
  pure: false
})
export class CategoryPipe implements PipeTransform {
  posts: FirebaseListObservable<any[]>;

  transform(input: Post, category: string) {

    var output: Post[] = [];
    console.log(input.category);
    if (category === "personals") {
      // for (var i = 0; i<input.length; i++) {
        if (input.category === "personals") {
          output.push(input);
        }
      // }
    } else if (category === "community") {
      // for (var i = 0; i<input.length; i++) {
        if (input.category === "community") {
          output.push(input);
        }
      // }
    } else if (category === "housing") {
        if (input.category === "housing") {
          debugger;
          output.push(input);
        }
    }
    return output;
  }

}
