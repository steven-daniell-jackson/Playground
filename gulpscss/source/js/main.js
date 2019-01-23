$(document).ready(function(){


	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
    $(this).toggleClass('open');
    $(".sidenav").toggleClass("sidenav--toggle").show();
  });
  
  jQuery(".list__group__item").click(function(){
    jQuery(this).find('.list__group__item--hidden').slideToggle();
    });

});