
//화살표 움직임
for (let i = 0; i < 6; i++) {
  let wrapper_w = $('#section03 .img_txt:eq(' + i + ')').width();
  let span_w = $('#section03 .img_txt:eq(' + i + ')>span').innerWidth();
  let i_w = $('#section03 .img_txt:eq(' + i + ')>i')

  $('.po_re:eq(' + i + ')').hover(function () {
    i_w.css('position', 'relative').stop().animate({ left: wrapper_w - span_w - 30 }, '0.8s', 'easeInCubic');
  }
    , function () {
      i_w.stop().css({ left: 0 });
    }
  )
}

// 전시장 찾기 checkbox
function customCheckbox() {
  var checkBox = $('input[name="typeSelect"]');
  $(checkBox).each(function () {
    $(this).wrap("<span class='custom'></span>");
    $(this).parent().append("<i class='fa-solid fa-check'></i>");
    if ($(this).is(':checked')) {
      $(this).parent().addClass("selected");
    }
  });
  $(checkBox).click(function () {
    $(checkBox).parent().removeClass("selected");
    $(this).parent().addClass("selected");
  });
}

$(document).ready(function () {
  customCheckbox();
});

//자동차 left 움직임 
$(window).on('scroll', function () {
  let sectop = $('#section01').offset().top;
  let wintop = $(window).scrollTop();
  if (wintop >= sectop - 400) {
    $('#section01 img').css('display', 'block')
    $('#section01 img').addClass('left')
  }

})

$('.overlay').on('click', function () {
  $('#header .inner .nav .gnb .lnb').hide();
  $(this).hide();
})

//lnb
$('#header .inner .nav .gnb>li>a').on('click', function () {
  $('#header .inner .nav .gnb>li>a').removeClass('active');
  let index = $('#header .inner .nav .gnb>li>a').index(this);

  if (index == 0) {
    let is_hidden = $('#header .inner .nav .gnb .lnb').is(":hidden");
    if (is_hidden) {
      $('#header .inner .nav .gnb .lnb').slideDown(400);
      $(this).addClass('active')
    } else {
      $('#header .inner .nav .gnb .lnb').slideUp(200);
    }
    $('.overlay').toggle();
  } else {
    $('#header .inner .nav .gnb .lnb').hide();
    $('.overlay').hide();
  }


  // if($(this).attr("clicked") != true){
  //   $('#header .inner .nav .gnb .lnb').slideDown(400);  
  //   $(this).attr("clicked", false);
  // }else{
  //   $('#header .inner .nav .gnb .lnb').hide();
  //   $(this).attr("clicked", true);
  // }
  //   $('.overlay').toggle();
})

// visual
// const gall = document.querySelector("#gall");
// const nav = document.querySelectorAll(".mn");

// let x = 0;
// let targetX = 0;

// function smoothMove() {
//   x = x + (targetX - x) * 0.1
//   gall.style.left = x + "px"
// }

// setInterval('smoothMove()', 10);

// for (let i = 0; i < nav.length; i++) {
//   nav[i].addEventListener('click', function (e) {
//     e.preventDefault();

//     targetX = -1920 * i
//   })
// }
// 100vw로하면됨

// visual plugin
var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

$('.sec05').click(function(){
  $('.desc_main').slideToggle();
})