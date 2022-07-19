$('.po_re').on('mouseover',function(){
  // $('po_re').find('i').css('color','red')
  $(this).find('.img_txt').delay(1000).css('justify-content','space-between')
})

$('.po_re').on('mouseout',function(){
  $(this).find('.img_txt').delay(1000).css('justify-content','flex-start')
})


$('#section05>.inner>span').on('click',function(){
  $('#section05>.inner>.desc').slideToggle();
})
