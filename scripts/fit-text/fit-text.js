
//Fit text helps us to keep aur big headers text Responsive!

$(function () {
    $(".big_header_content h1").fitText(1, { minFontSize: '25pt', maxFontSize: '51pt' });

});


(function( $ ){

$.fn.fitText = function( kompressor, options ) {

// Setup options
var compressor = kompressor || 1,
    settings = $.extend({
      'minFontSize' : Number.NEGATIVE_INFINITY,
      'maxFontSize' : Number.POSITIVE_INFINITY
    }, options);

return this.each(function(){

  // Store the object
  var $this = $(this);

  // Resizer() resizes items based on the object width divided by the compressor * 10
  var resizer = function () {
    $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
  };

  // Call once to set.
  resizer();

  // Call on resize. Opera debounces their resize by default.
  $(window).on('resize.fittext orientationchange.fittext', resizer);

});

};

})($);
