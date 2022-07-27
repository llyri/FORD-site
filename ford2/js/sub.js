$('.main_nav ul>li>a').on('click', function (e) {
  e.preventDefault();
  if ($(this).hasClass('on') === false) {
    $('.main_nav ul>li>a').removeClass('on')
    $(this).addClass('on')
  }
  else {
    $(this).removeClass('on')
  }
})

for (let i = 0; i < 8; i++) {
  $('.color_change>a:eq(' + i + ')').on('click', function (e) {
    e.preventDefault();
    if ($(this).hasClass('circle') === false) {
      $('.sel_img>img').attr('src', './subimages/color0' + (i + 1) + '.png')
      $('.color_change>a').removeClass('circle')
      $(this).addClass('circle')
    }
    else {
      $(this).removeClass('circle')
    }
  })
}

for (let i = 0; i < 4; i++) {
  $('#section03 .new_img>div .plus:eq(' + i + ')').hover(function (e) {
    e.preventDefault();
    $(this).stop().fadeOut();
    $('#section03 .new_img>div .img_mask:eq(' + i + ')').stop().fadeIn(500);
  }, function (e) {
    e.preventDefault();
    $(this).fadeIn();
    $('#section03 .new_img>div .img_mask:eq(' + i + ')').stop().fadeOut(500);
  })
}


$('#section07').on('click',function(){
  $('#section07 .desc').slideToggle();
})