  $(document).ready(function() {
     $(document).ajaxComplete(function() {
 
    // jQuery code for box shadow on article (tweet boxes) boxes on mouseover
 
  const $tweetContainer = $('article')
  
  
    $tweetContainer.on('mouseenter', function() {
      $(this).addClass("box-shadow")
    });
    
    $tweetContainer.on('mouseleave', function() {
      $(this).removeClass("box-shadow")
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
  
});
  