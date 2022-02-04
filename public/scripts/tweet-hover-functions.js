  $(document).ready(function() {

     $(document).ajaxComplete(function() {
 
      // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      // jQuery code for box shadow on article (tweet boxes) boxes on mouseover

      // grabbing tweet container
      const $tweetContainer = $('article')

      //event listener for mouser enter, will apply class to tweet container (class updates box shadow to enable)
      $tweetContainer.on('mouseenter', function() {
       $(this).addClass("box-shadow")
      });
    
      //event listener for mouser exit, will apply class to tweet container (class disables box shadow)
      $tweetContainer.on('mouseleave', function() {
        $(this).removeClass("box-shadow")
      });

      // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      // jQuery code for icon mouse-over to change color of individual icons

      // grabbing tweet icons
      const $tweetIcons = $('i')

      //event listener for mouser enter, will apply class to icon container (class updates icon to new color)
      $tweetIcons.on('mouseenter', function() {
        $(this).addClass("tweet-text-color")
      })

      //event listener for mouser exit, will apply class to icon container (class updates icon to original color)
      $tweetIcons.on('mouseleave', function() {
        $(this).removeClass("tweet-text-color")
      })

      // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------


   });
});
  