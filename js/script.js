$('.header__btn-contacts').click(function(event){
  $('.contacts,.header__btn-contacts,.contacts-bg-shadow,.header__menu-btn,.header__menu-btn-open,.header__menu-btn-close').addClass('active');
})
$('.header__menu-btn-open').click(function(event){
  $('.menu,.contacts-bg-shadow,.header__menu-btn,.header__menu-btn-open,.header__menu-btn-close,.header__btn-contacts-z-block').addClass('active');
});
$('.header__menu-btn-close,.contacts-bg-shadow,.contacts__close,.header__btn-contacts-z-block').click(function(event){
  $('.contacts,.header__btn-contacts,.contacts-bg-shadow,.header__menu-btn,.header__menu-btn-open,.header__menu-btn-close,.menu').removeClass('active');
});


$(function(){

  $('.gallery').each(function() {

    var $gal     = $(this),
        $movable = $(".movable", $gal), 
        $slides  = $(">*", $movable),
        N        = $slides.length,
        C        = 0,
        itv      = null;
    
    function play() { itv = setInterval(anim, 3000); }
    function stop() { clearInterval(itv); }
    function anim() {
      C = ($(this).is(".prev") ? --C : ++C) <0 ? N-1 : C%N;
      $movable.css({transform: "translateX(-"+ (C*100) +"%)"});
    }
    
    $(".prev, .next", this).on("click", anim);
    $gal.hover(stop, play);
    play();

  });

});

$(function(){

  $('.window').each(function() {

    var $gal     = $(this),
        $movable = $(".movable", $gal), 
        $slides  = $(">*", $movable),
        N        = $slides.length,
        C        = 0,
        itv      = null;
    
    function play() { itv = setInterval(anim, 3000); }
    function stop() { clearInterval(itv); }
    function anim() {
      C = ($(this).is(".prev1") ? --C : ++C) <0 ? N-1 : C%N;
      $movable.css({transform: "translateX(-"+ (C*100) +"%)"});
    }
    
    $(".prev, .next", this).on("click", anim);
    $gal.hover(stop, play);
    play();

  });

});




var st = $(window).scrollTop();
var navheight = $('.header').height() + 15;

$(window).scroll(function() {
	var nst = $(window).scrollTop();
	var subio = nst < st;
	var bajo = nst - 80 > st;
	
	if (subio) {
		$('.header').addClass('sticky');
		st = nst;
	} else if(bajo) {
		$('.header').removeClass('sticky');
		st = nst;
	}
});


$.ajax({
  "method": "GET",
  'url': "https://sashahjggggv.github.io/photos-great-house/apartments/type1/inside-models/bath.jpg",
  'success': function(data){
    console.log("success")
  }
});