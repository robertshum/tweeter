$(document).ready(function() {

  //on input for the tweet input box
  $('#tweet-text').on('input', function() {
    //console.log(this.value);
    console.log(this.value.length);
  });

});