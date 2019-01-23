$(document).ready(function(){


	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
    $(this).toggleClass('open');
    $(".sidenav").toggleClass("sidenav--toggle");
  });
  
  $(".sidenav").toggleClass("sidenav--toggle");


  jQuery(".list__group__item").click(function(){
    console.log('123');
    jQuery(this).find('.list__group__item--hidden').slideToggle();
    });

});