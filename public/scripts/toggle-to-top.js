/*
// This class is in charge of the scroll to top feature.
// This also adds/removes css effects to the button.
*/
$(document).ready(function() {

  //cache this so we don't need to constantly search for toggle
  const $toggle = $('#scrollToTop');
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

      //smooth scroll to target
      $('html, body').animate({
        scrollTop: 0
      }, 800, function() {

        //animation complete
        isToggleReady = true;
      });

    }
  });

});