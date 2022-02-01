

$(document).ready(function() {

  // grabbing text element
  const $text = $('#tweet-text');

  // setting up event listener to listen for input on text box
  $text.on('input', function() {

    // grabbing text length within textbox, grabbing counter element from DOM tree, reassigning value of the counter element to text length
    $textLength =  $(this).val().length;

    $counter = $($(this).parent()[0][2]);
    $counter.val(140 - $textLength);

    // adding if statements to control the colour if the counter is currently above or below 0 (if below, red)
    if (140 - $textLength < 0) {
      $counter.attr("id", "container2")
    }
    if (140 - $textLength >= 0) {
      $counter.attr("id", "container3")
    }
  });
});