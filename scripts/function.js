
$(window).load(function () {

var setInt = setInterval(function () {
  sliderOne()
}, 3000);

function sliderOne() {
  $('.background_slide_2').delay(3000).fadeOut(3000).delay(3000).fadeIn(3000);
};

secondSlider();
thirdSlider();


});


function secondSlider() {
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


function thirdSlider() {
  $('.left_arrow').on('click', function () {
    $('.jump_img_right').removeClass('jump_img_right').addClass('jump_img_left');
    $('.moving_container:first-child, .moving_container:nth-child(2)').toggleClass('jump_img_left');
  });

  $('.right_arrow').on('click', function () {
    $('.jump_img_left').removeClass('jump_img_left').addClass('jump_img_right');
    $('.moving_container:first-child, .moving_container:nth-child(2)').toggleClass('jump_img_right');
  });

};
