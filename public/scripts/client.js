/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready( function() {

  // let tweetData =  [
  //   {
  //     "user": {
  //       "name": "Newton",
  //       "avatars": "https://i.imgur.com/73hZDYK.png"
  //       ,
  //       "handle": "@SirIsaac"
  //     },
  //     "content": {
  //       "text": "If I have seen further it is by standing on the shoulders of giants"
  //     },
  //     "created_at": 1461116232227
  //   },
  //   {
  //     "user": {
  //       "name": "Descartes",
  //       "avatars": "https://i.imgur.com/nlhLi3I.png",
  //       "handle": "@rd" },
  //     "content": {
  //       "text": "Je pense , donc je suis"
  //     },
  //     "created_at": 1461113959088
  //   }
  // ]

  

  const createTweetElement = function(tweetData) {
    const $tweetSection = $('.tweets');
    console.log('logging tweetData', tweetData)

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
          console.log('logging tweet and tweets in for loop', tweet, tweets);
          const $tweet = createTweetElement(tweets[tweet]);
          $tweetSection.append($tweet);
        }
      }
    })

  };

  renderTweets();

});