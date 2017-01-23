export class Post
{
    constructor
    (
      public category: string,
      public subcategory: string,
      public title: string,
      public date: Date,
      public content: string,
      public image: string,
      public location: string,
      public id: number,
      public price: number=0
    ){};

}
