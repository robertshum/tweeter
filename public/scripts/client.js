
$(document).ready(function() {
  /*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

  // Create a new tweet in the DOM
  const createTweetElement = function(tweet) {

    // Use timeago library
    const timeStamp = timeago.format(tweet.created_at, 'en_US');

    //creates html element(s) with jQuery.  Populates the data from a tweet.
    const $tweet = $(`
      <!-- an old tweet -->
      <article class="tweet">
        <header>
          <!-- avatar, name and handle goes here -->
          <div class="avatar-handle-container">
            <div class="avatar-container">
              <img src="${tweet.user.avatars}" alt="My lovely avatar.">
              <h1>${tweet.user.name}</h1>
            </div>
            <p>${tweet.user.handle}</p>
          </div>
        </header>

        <!-- tweeted text (re-use css!) -->
        <textarea class="tweet-field" name="text" readonly>${tweet.content.text}</textarea>

        <footer>
          <!-- day and icons go here -->
          <div class="days-posted-icons-container">
            <p>${timeStamp}</p>
            <div>
              <i class="fa-solid fa-flag"></i>
              <i class="fa-solid fa-retweet"></i>
              <i class="fa-solid fa-heart"></i>
            </div>
          </div>
        </footer>
      </article>
      `);

    //return this tweet.
    return $tweet;
  };

  // Render tweets on the DOM
  const renderTweets = function(tweetArray) {

    // Clear all child elements
    $('#tweets-container').empty();

    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
    for (const tweetObj of tweetArray) {
      const $tweet = createTweetElement(tweetObj);

      //Load new tweets
      $('#tweets-container').append($tweet);
    }
  };

  //handle submit events with AJAX
  $(".tweet-form").on("submit", function(event) {

    //stop the submission from our HTML form
    event.preventDefault();

    // Serialize the form data:
    // Looks at all the 'name' attributes in event.target (or a form in our case), and then collects the values of them.  It then encodes it and returns a obj.
    const formData = $(event.target).serialize();

    // Check if specific input fields are empty by...
    //...filter out the "text=" (key)
    //...check if the (value) is empty
    const value = formData.slice(5);
    if (value === "") {
      displayMsg("The tweet is empty.");
      return;
    }

    //if it's over 140 characters, give them a stern but friendly warning.
    //TODO more magic numbers.
    if (value.length > 140) {
      displayMsg("The tweet is too long");
      return;
    }

    //ajax post request that doesn't refresh the page
    $.post("/tweets", formData)
      .done(function(response) {
        // Handle a successful response
        console.log("Success:", response);

        //Load the new results
        loadTweets();

        //TODO move to helper method to clear the results
        //probably reset the css, and the number to counter to 140.
        const textField = $(event.target).find('#tweet-text');
        textField.val("");
      })
      //TODO handle better
      .fail(function(jqXHR, textStatus, errorThrown) {
        // Handle the request failure
        console.error("Request failed:", textStatus, errorThrown);
        // You can access jqXHR.responseJSON for the error message if it's available
        if (jqXHR.responseJSON && jqXHR.responseJSON.error) {
          console.error("Server Error:", jqXHR.responseJSON.error);
        }
      });
  });

  //get tweets from our 'db'
  const loadTweets = function() {
    //use jquery to make a request to /tweets and get array of tweets as JSON
    $.get('/tweets')
      .then(function(responseData) {

        //display the tweets from the GET call
        //...looks like jQuery converts json into obj.
        renderTweets(responseData);
      });
  };

  //TODO alert for now
  const displayMsg = function(msg) {
    alert(msg);
  };

  //test, remove when done
  loadTweets();

});