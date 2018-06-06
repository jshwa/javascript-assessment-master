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
       let comment = $(`#comment-description-${id}`).val();
       console.log(id);
       console.log(comment);
    })
  }
}
