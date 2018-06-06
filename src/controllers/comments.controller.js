'use strict';

class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment')
  }

  init() {
    // kick off controller from here
    this.addCommentFormListener()
  }

  addCommentFormListener() {
    // create comment form listener code here
    const self = this;
    for (let i = 0; i < this.$addCommentForm.length; i++) {
      this.$addCommentForm[i].addEventListener('submit', function(e) {
         e.preventDefault();
         let imageId = this.dataset.id;
         let commentContent = $(`#comment-description-${imageId}`).val();
         let commentObject = new Comment(imageId, commentContent);
         self.render(commentObject);
         $(`#comment-description-${imageId}`).val("");
      })
    }
  }

  render(commentObject) {
     $(`#comments-${commentObject.image.id}`).append(commentObject.commentEl())
  }
}