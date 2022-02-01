

$(document).ready(function() {

  
  
  const $text = $('#tweet-text');

  $text.on('input', function() {
    console.log(140 - this.textLength);
    
  });


});