/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


// make sure all scripts below execute AFTER document has finished loading
$(document).ready(function() {


  // function to create a new tweet element --------------------------------------------------------------------------------------------------------------------------------
  const createTweetElement = function(tweetData) {
    const $tweetSection = $('.tweets');
      
    // escape function to ensure no XSS is possible
    const escape = function(str) {
      let div = document.createElement("div");
      div.appendChild(document.createTextNode(str));
      return div.innerHTML;
    };

    //Setting the HTML for new tweets, with template literal strings for relevant data points ----------------------------------------------------------------------------------
    const newTweetHTML =
    `<article>
      <header>
        <p> <img style="padding-right: 10px" src="${escape(tweetData.user.avatars)}"> ${escape(tweetData.user.name)}</p>
        <p style="color: #acc5c9; font-weight: 600;">${escape(tweetData.user.handle)}</p>
      </header>
      <div class="tweettext">
        <p>${escape(tweetData.content.text)}</p>
      </div>
      <footer>
        <p><b>${timeago.format(escape(tweetData.created_at))}</b></p>
        <div>  
          <i class="fas fa-flag"></i>
          <i class="fas fa-retweet"></i>
          <i class="fas fa-heart"></i> 
        </div>
      </footer>
    </article>`;

    //calling createNewTweet returns new tweet HTML
    return newTweetHTML;
  };



  // function to render all tweets ------------------------------------------------------------------------------------------------------------------------------------------------
  const renderTweets = function() {
    const $tweetSection = $('.tweets');

    $.ajax({
      url: '/tweets',
      method: 'GET',
      success: (tweets) => {
        $tweetSection.empty();
        for (const tweet in tweets) {
          const $tweet = createTweetElement(tweets[tweet]);
          $tweetSection.append($tweet);
        }
      }
    });
  };

  // function to render an error message to the DOM if the form submmission is either empty, or above 140 characters in length
  const renderError = function(string) {

    // grabbing section where error will appear
    const $errorSection = $('.new-tweet');

    // placing error message HTML in desired location in DOM
    $errorSection.prepend(`<label class="error"><img class="error-img" src="https://cdn-icons.flaticon.com/png/512/4201/premium/4201973.png?token=exp=1643858307~hmac=c8125c2eaf58a584d271318dccc53234">${string}</label>`);
  };
  
  // call renderTweets to ensure current page is populated with current database of tweets
  renderTweets();

  // grabbing form input
  const $form = $('form');

  // function executes on form submission
  $form.submit(function(event) {
    $('.error').remove();
 
    // preventing default request to go to a new page
    event.preventDefault();

    // declaring data(to use in Ajax request) and grabbing input length of form (for error messages)
    const data = $(this).serialize();
    const $inputLength = $('textarea').val().length;
     

    // error handling for tweet greater than 140 char
    if ($inputLength > 140) {
      renderError('Tweet too long!');
      $('.error').slideDown();
      return;
    }

    // error handling for empty tweet
    if ($inputLength === 0) {
      renderError('Tweet empty!');
      $('.error').slideDown();
      return;
    }

      
    // starting ajax request
    $.ajax({
      method: 'POST',
      url: '/tweets',
      data: data
    }).then(()=>{

      // error message will slide up after 401ms for smoother UX
      $('.error').slideUp();
      setTimeout(() => {
        $('.error').remove();
      }, 401);

      // resetting text input to nothing, and keeping focus inside
      $('textarea').val('').focus();

      // resetting counter
      $('output').val('140').attr("id", "container3");
    
      //rendering all tweets with newest tweet now appended to the database
      renderTweets();
    });
  });
});