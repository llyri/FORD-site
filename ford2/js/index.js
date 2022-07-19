
$('.po_re').hover(function(){
  // $('po_re').find('i').css('color','red')
  // $(this).find('.img_txt').delay(1000).css('justify-content','space-between')
  const wrapper_width = $(); // 테두리 폭
  const span_width = 159; // span 폭

  $(this).find('i').animate({'width':wrapper_width-span_width})
},function(){
  $(this).find('i').css('width','')
})

$('#section05>.inner>span').on('click',function(){
  $('#section05>.inner>.desc').slideToggle();
})


$('#section04 .inner .find_left fieldset>div:nth-child(1)').on('click',function(){
  const current = $(this).next('input').attr("checked");
  console.log(current);
  $(this).next('input')
})

// $(":checkbox").on('change', function(e){
//   $(this).hasAttr
//   const checked = $(this).prop("checked");
//   console.log(checked);
// })