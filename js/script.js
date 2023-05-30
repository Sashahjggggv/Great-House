$('.header__btn-contacts').click(function(event){
  $('.contacts,.header__btn-contacts,.contacts-bg-shadow').toggleClass('active');
});
$('.header__link.active,.contacts__close,.contacts-bg-shadow').click(function(event){
  $('.contacts,.header__btn-contacts,.contacts-bg-shadow').removeClass('active');
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