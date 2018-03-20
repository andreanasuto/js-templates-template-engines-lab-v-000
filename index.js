function postComment() {
  var comment = document.getElementById("commentContent").value
  var author = document.getElementById("commentAuthor").value

  var commentTemplate = document.getElementById("comment-template").innerHTML
  var templateFn = _.template(commentTemplate)
  var commentsDiv = document.getElementById("comment")
  var templateHTML = templateFn({ 'comment': comment, 'author': author})
  commentsElements.innerHTML += templateHTML
}

function createPost() {

  var title = document.getElementById("postTitle").value
  var author = document.getElementById("postAuthor").value
  var content = document.getElementById("postBody").value

  var postTemplate = document.getElementById("post-template").innerHTML
  var templateFn = _.template(postTemplate)
  var postElement = document.getElementById("post")
  var templateHTML = templateFn({ 'title': title, 'author': author, 'content': content})
  postElement.innerHTML += templateHTML

}
