'use strict';
// create Comment class here
class Comment {
   constructor(imageId, commentContent) {
      this.id = this.constructor.all.length;
      this.commentContent = commentContent;
      this.image = this.findImage(imageId);
      this.constructor.all.push(this);
   }

   findImage(imageId) {
      Image.all[imageId].comments.push({
         id: this.id,
         commentContent: this.commentContent, 
      })
      return Image.all[imageId]
   }

   commentEl() {
      return `<li id="comment-id-${this.id}">${this.commentContent}</li>`
   }

}

Comment.all = [];