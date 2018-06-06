// create Comment class here

class Comment {
   constructor(id, commentContent) {
      this.id = id;
      this.image = $(`#image-${id}`);
      this.commentContent = commentContent;
      this.constructor.all.push(this);
   }

}

Comment.all = [];