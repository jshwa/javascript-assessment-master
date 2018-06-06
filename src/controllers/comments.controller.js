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
    this.$addCommentForm.on('submit', function(e){
       e.preventDefault();
       let id = $(this).data().id;
       let commentContent = $(`#comment-description-${id}`).val();
       let comment = new Comment(id, commentContent);
       console.log(Comment.all)
    })
  }
}
