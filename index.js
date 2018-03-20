function postComment() {
  var comment = document.getElementById("commentContent").value
  var author = document.getElementById("commentAuthor").value

  var commentsTemplate = document.getElementById("comments-template").innerHTML
  var templateFn = _.template(commentTemplate)
  var mainDiv = document.getElementsByTagName('main')[0].innerHTML
  var templateHTML = templateFn()
  mainDiv.innerHTML += templateHTML
}

function createPost() {

  var title = document.getElementById("postTitle").value
  var author = document.getElementById("postAuthor").value
  var content = document.getElementById("postBody").value

  var postTemplate = document.getElementById("post-template").innerHTML
  var postTemplateFn = _.template(postTemplate)
  var post = postTemplateFn({ 'title': title, 'author': author, 'content': content})

  // you gotta insert the post template in the page template
  // then you gotta insert the page template in the main div

  var pageTemplate = document.getElementById("page-template").innerHTML
  var pageTemplateFn = _.template(pageTemplate)
  var mainDiv = document.getElementsByTagName('main')[0].innerHTML
  var pageTemplateHTML = pageTemplateFn({'post': post})
  mainDiv.innerHTML += pageTemplateHTML

}
