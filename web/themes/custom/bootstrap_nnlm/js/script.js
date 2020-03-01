
function SmoothVerticalScrolling(e, time, where) {
  var eTop = e.getBoundingClientRect().top;
  var eAmt = eTop / 100;
  var curTime = 0;
  while (curTime <= time) {
      window.setTimeout(SVS_B, curTime, eAmt, where);
      curTime += time / 100;
  }
}


  

(function ($, Drupal) {
  //multi-card carousel

  "use strict";

  // When the user clicks on the button, scroll to the top of the document
 $("#back-button").click(function(){
  $('html, body').animate({scrollTop : 0},300);
  return false;
  });



  $(document).ready(function() {

    $('#photocarouselIndicators').carousel(
      {interval: 8000}
    )

    $('#carouselExample').on('slide.bs.carousel', function (e) {

        var $e = $(e.relatedTarget);
        var idx = $e.index();
        var itemsPerSlide = 4;
        var totalItems = $('.carousel-resource-item').length -1;
        
        if (idx >= totalItems-(itemsPerSlide-1)) {
            var it = itemsPerSlide - (totalItems - idx);
            for (var i=0; i<it; i++) {
                // append slides to end
                if (e.direction=="left") {
                    $('.carousel-resource-item').eq(i).appendTo('.carousel-resource-inner');
                }
                else {
                    $('.carousel-resource-item').eq(0).appendTo($(this).find(".carousel-resource-inner"));
                }
            }
        }
    });


  });








//smooth scrolling
$(document).ready(function(){
    // Add smooth scrolling to all links
    $(".back-button").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });


  $(document).keydown(function(e) {
    // ESCAPE key pressed
    if (e.keyCode == 27) {
      if( $('#feedback-form').hasClass('active')){
        $('#feedback-form').removeClass('active')
      }
    }
});


//external link
$("a.external").after("<img src=" + Drupal.settings.path_to_images + "/custom/external-link.png' title='Open in new window icon' alt='Open in new window icon' class='external-link-icon' />");

})(jQuery, Drupal);