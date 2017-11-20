/*
simple jquery function to fade out the card upon clicking on it
*/

// once the document is loaded
$(document).ready(function()  {
  // responding on a "click" event, trigger a function
  $(".illusion-card").on("click", function() {
    // fading out the card at a slow speed
    $(".illusion-card").fadeOut("slow");
  });
});
