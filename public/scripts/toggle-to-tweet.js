$(document).ready(function() {

  //cache this so we don't need to constantly search for toggle
  const $toggle = $('#scrollToggle');
  let isToggleReady = true;

  //on Hover and mouse leave.  fa-shake class comes from
  //fontawesome.com
  $toggle.hover(function() {

    // On hover, add the 'fa-shake' class
    //instead of $toggle we could also use $(this).
    $toggle.addClass('fa-shake');
  }, function() {

    // On mouseout, remove the 'fa-shake' class
    $toggle.removeClass('fa-shake');
  });

  //on input for the toggle in navigation bar
  $toggle.on('click', function() {

    //do not reset until animation is ready.  This prevents spamming of toggles
    //which could have undesirable effects like scrollbar locking.
    if (isToggleReady) {

      isToggleReady = false;

      // // Smooth scroll to the target element
      var viewportHeight = $(window).height();

      //Scroll to the middle.  The reason why we subtract (viewport height / 2) is because we want to get to the 'middle' of the element.
      //if we scroll to the top of 'tweet-text', the navigation bar will cover it.
      var targetPosition = $('#tweet-text').offset().top - viewportHeight / 2;

      //smooth scroll to target
      $('html, body').animate({
        scrollTop: targetPosition
      }, 800, function() {

        //animation complete
        isToggleReady = true;
      });

      //focus on the text box
      $('#tweet-text').focus();
    }
  });

});