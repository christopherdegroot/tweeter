/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready( function() {

  const createTweetElement = function(tweetData) {
    const $tweetSection = $('.tweets');
    //console.log('logging tweetData', tweetData)

    return `<article>
    <header>
      <p> <img style="padding-right: 10px" src="${tweetData.user.avatars}"> ${tweetData.user.name}</p>
      <p style="color: #acc5c9; font-weight: 600;">${tweetData.user.handle}</p>
    </header>
    <div class="tweet-text">
      <p>${tweetData.content.text}</p>
    </div>
    <footer>
      <p><b>${timeago.format(tweetData.created_at)}</b></p>
      <div>  
        <i class="fas fa-flag"></i>
        <i class="fas fa-retweet"></i>
        <i class="fas fa-heart"></i> 
      </div>
    </footer>
  </article>`
  };

  // const $tweet = createTweetElement(tweetData)
  // $tweetSection.append($tweet);


  const renderTweets = function() {
    const $tweetSection = $('.tweets');
   

    $.ajax({
      url: '/tweets',
      method: 'GET',
      success: (tweets) => {
        $tweetSection.empty();
        for (const tweet in tweets) {
          //console.log('logging tweet and tweets in for loop', tweet, tweets);
          const $tweet = createTweetElement(tweets[tweet]);
          $tweetSection.append($tweet);
        }
      }
    })

  };

  
  const $form = $('form')
  
   $form.submit( function(event) {

     console.log('pressed!')
     event.preventDefault()
     const data = $(this).serialize();
      console.log(data);
      console.log('logging data.length', data.length -5)

      if(data.length-5 > 140) {
        alert('Tweet too long!')
        return;
      }

      if (data.length-5 === 0) {
        alert('Please enter a tweet!')
        return;
      }

     $.ajax({
       method: 'POST',
       url: '/tweets',
       data: data
     }).then(()=>{
       console.log('Tweet created Successfully');
       $('#tweet-text').val('').focus();
       $('output').val('140').attr("id", "container3");
       renderTweets();
     });
   })

});