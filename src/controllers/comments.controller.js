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
    this.$addCommentForm.on('submit', function(e){
       e.preventDefault();
       let imageId = $(this).data().id;
       let commentContent = $(`#comment-description-${imageId}`).val();
       let commentObject = new Comment(imageId, commentContent);
       self.render(commentObject);
    })
  }

  render(commentObject) {
     console.log(commentObject.image.id)
     $(`#comments-${commentObject.image.id}`).append(commentObject.commentEl())
  }
}