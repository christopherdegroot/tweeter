
$(document).ready(function() {
 
  // jQuery code for box shadow on article (tweet boxes) boxes on mouseover
const $tweetArticle = $('article')

$tweetArticle.on('mouseenter', function() {
  $tweetArticle.addClass("box-shadow")
});

$tweetArticle.on('mouseleave', function() {
  $tweetArticle.removeClass("box-shadow")
});


// jQuery code for icon mouse-over to change color of individual icons
const $tweetIcons = $('i')

$tweetIcons.on('mouseenter', function() {
  $(this).addClass("tweet-text-color")
})

$tweetIcons.on('mouseleave', function() {
  $(this).removeClass("tweet-text-color")
})

});
