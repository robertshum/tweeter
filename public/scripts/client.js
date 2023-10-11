$(document).ready(function() {
  /*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

  //Sample Tweet:
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];


  // Create a new tweet in the DOM
  const createTweetElement = function(tweet) {

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
            <p>${tweet.created_at}</p>
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

    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
    for (const tweetObj of tweetArray) {
      const $tweet = createTweetElement(tweetObj);

      //TODO check for new tweets that should show top of container.
      $('#tweets-container').append($tweet);
    }
  };

  //handle submit events with AJAX
  $(".tweet-form").on("submit", function(event) {

    //stop the submission from our HTML form
    event.preventDefault();

    // Serialize the form data:
    // Looks at all the 'name' attributes in event.target (or a form in our case), and then collects the values of them.  It then encodes it and returns a obj.
    console.log("event.target", event.target);
    const formData = $(event.target).serialize();

    //ajax post request that doesn't refresh the page
    $.post("/tweets", formData)
      .done(function(response) {
        // Handle a successful response
        console.log("Success:", response);
        // You can access response.error or other properties here
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

  renderTweets(data);


});