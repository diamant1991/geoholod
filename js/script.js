$('input,textarea').focus(function(){
  $(this).data('placeholder',$(this).attr('placeholder'))
  $(this).attr('placeholder','');
});
$('input,textarea').blur(function(){
  $(this).attr('placeholder',$(this).data('placeholder'));
});

jQuery(function($){
   $(".telephone-input").mask("+7(999)999-99-99");
});

$( document ).ready(function() {

	/*$(".toggle-btn").click(function () {
      $(".collapse-menu").slideToggle(300);
   });*/

	$('.get-call').click(function(){
    	$('.form-mask').fadeIn(300);
    	$('#get-call').fadeIn(300);
    })


    $('.form-mask,.closed-btn').click(function(){
  	 $('.modal,.form-mask').fadeOut(300);
  })

	$(document).keyup(function(d) {
	    if (d.keyCode == 27) {
	        $('.form-mask').fadeOut(300);
	        $('.modal').fadeOut(300);
	    }
	});

});