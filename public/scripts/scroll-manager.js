/*
// This class is in charge of scrolling handling for the window.
// This will hide/show elements based on the scrolling.
*/

/*
// REQUIREMENT NOTES FROM COMPASS:
The bottom button should only display when the user starts to scroll and the nav button should disappear.
The bottom button should disappear and the nav button should reappear when the user scrolls back to the top.

What I did: when user scrolls, it should SHOW so the nav button so users can quickly access the tweet in the middle of the page.

What I did: when a user at the top of the page, it should HIDE the nav button, because we the tweet box is already visible.
*/
$(document).ready(function() {

  //cache this so we don't need to constantly search for window
  const $window = $(window);
  const $sideNavContainer = $(".title-side-container");
  const $toggle = $('#scrollToTop');

  $window.on("scroll", function() {

    //Show the write new tweet container
    $sideNavContainer.css("display", "flex").fadeIn("slow");

    //Show the toggle to top button
    $toggle.css("display", "inline-block").fadeIn("slow");

    //we are at the top of the page
    if ($window.scrollTop() === 0) {

      //Hide the write new tweet container
      $sideNavContainer.css("display", "flex").fadeOut("slow");

      //Hide the toggle to top button
      $toggle.css("display", "inline-block").fadeOut("slow");
      return;
    }
  });

});