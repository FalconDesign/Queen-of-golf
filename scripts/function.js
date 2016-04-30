
$(window).load(function () {

var setInt = setInterval(function () {
  sliderOne()
}, 3000);

function sliderOne() {
  $('.background_slide_2').delay(3000).fadeOut(3000).delay(3000).fadeIn(3000);
};

firstSlider();

});


function firstSlider() {
  $('.left_arrow_next').click(function () {
    var $this = $(this);
    curActiveFoto = $('.box_img').find('.active_foto'),
    position = $('.box_img').children().index(curActiveFoto),
    fotoNum = $('.box_img').length;

    if (position > 1) {
      $('.active_foto').removeClass('active_foto');
      $('.box_img').children().first().addClass('active_foto');
    } else {
      $('.active_foto').removeClass('active_foto').next().addClass('active_foto');
    };
  });
  $('.right_arrow_prev').click(function () {
    var $this = $(this);
    curActiveFoto = $('.box_img').find('.active_foto'),
    position = $('.box_img').children().index(curActiveFoto),
    fotoNum = $('.box_img').length;
    if (position < 1) {
      $('.active_foto').removeClass('active_foto');
      $('.box_img').children().last().addClass('active_foto');
    } else {
      $('.active_foto').removeClass('active_foto').prev().addClass('active_foto');
    };
  });
};
