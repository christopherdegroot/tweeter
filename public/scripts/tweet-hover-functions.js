
$(document).ready(function() {
 
  
const $tweetArticle = $('article')


$tweetArticle.on('mouseenter', function() {
  $tweetArticle.addClass("box-shadow")
});

$tweetArticle.on('mouseleave', function() {
  $tweetArticle.removeClass("box-shadow")
});



});
