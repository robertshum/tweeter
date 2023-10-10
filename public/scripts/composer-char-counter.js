$(document).ready(function() {

  //on input for the tweet input box
  $('#tweet-text').on('input', function() {
    //console.log(this.value);
    const currCharLength = this.value.length;

    //convert 'this' to a jquery obj.
    const $tweetText = $(this);

    // Traverse to find the 'counter' element within the same parent container
    const $tweetCounter = $tweetText.siblings('.tweet-submission-container').children('.tweet-counter');

    //TODO magic numberssss
    //TODO stop ppl from submitting after < 0
    const remaining = 140 - currCharLength;
    $tweetCounter.text(remaining);

    if (remaining < 0) {

      //change the css to be negative
      $tweetCounter.removeClass("counter-positive").addClass("counter-negative");
      return;
    }

    //change to regular css
    $tweetCounter.removeClass("counter-negative").addClass("counter-positive");
  });

});