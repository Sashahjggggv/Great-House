// функції відкриття, закриття вспливаючих вікон
$('.header__btn-contacts').click(function(event){
  $('.contacts,.header__btn-contacts,.contacts-bg-shadow,.header__menu-btn,.header__menu-btn-open,.header__menu-btn-close').addClass('active');
})
$('.header__menu-btn-open').click(function(event){
  $('.menu,.contacts-bg-shadow,.header__menu-btn,.header__menu-btn-open,.header__menu-btn-close,.header__btn-contacts-z-block').addClass('active');
});
$('.header__menu-btn-close,.contacts-bg-shadow,.contacts__close,.header__btn-contacts-z-block').click(function(event){
  $('.contacts,.header__btn-contacts,.contacts-bg-shadow,.header__menu-btn,.header__menu-btn-open,.header__menu-btn-close,.menu,.alex').removeClass('active');
});
$('.alex-logo').click(function(event){
  $('.header').addClass('sticky');
  $('.contacts,.header__btn-contacts,.contacts-bg-shadow,.menu,.alex').removeClass('active');
  $('.alex,.contacts-bg-shadow,.header__menu-btn,.header__menu-btn-open,.header__menu-btn-close').addClass('active');
});

// функції взяті з інету перелистування картинок в першому блоці галереї
funcSlideTopGallery = function(){
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
}

// функції перелистування картинок в блоці вигляду з вікна
funcSlideWindowGallery = function(){
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
    $(".prev1, .next1", this).on("click", anim);
    $gal.hover(stop, play);
    play();
  });
}

// функції взяті з інету перелистування картинок в першому блоці футера
funcSlideFooterGallery = function(){
  $('.gallery-footer').each(function() {
    var $gal     = $(this),
        $movable = $(".movable", $gal), 
        $slides  = $(">*", $movable),
        N        = $slides.length,
        C        = 0,
        itv      = null;
    function play() { itv = setInterval(anim, 3000); }
    function stop() { clearInterval(itv); }
    function anim() {
      C = ($(this).is(".prev3") ? --C : ++C) <0 ? N-1 : C%N;
      $movable.css({transform: "translateX(-"+ (C*100) +"%)"});
    }
    $(".prev3, .next3", this).on("click", anim);
    $gal.hover(stop, play);
    play();
  });
}
funcSlideFooterGallery()

// функції взяті з інету перелистування картинок в першому блоці футера
funcSlideFooterGallery = function(){
  $('.slider').each(function() {
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
}
funcSlideFooterGallery()

// функція ховання, показу хедера при скролі
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

// функція відображення викуплених квартир для плану поверху
funcShowFalseApartments = function(){
  $.ajax({
    "method": "GET",
    'url': "https://sashahjggggv.github.io/photos-great-house/144.json",
    'success': function(data){
      // round 2
      if (data.n1) {} else { $("[data-apartment-id=1]").addClass('sold')}
      if (data.n2) {} else { $("[data-apartment-id=2]").addClass('sold')}
      if (data.n3) {} else { $("[data-apartment-id=3]").addClass('sold')}
      if (data.n4) {} else { $("[data-apartment-id=4]").addClass('sold')}

      if (data.n33) {} else { $("[data-apartment-id=33]").addClass('sold')}
      if (data.n34) {} else { $("[data-apartment-id=34]").addClass('sold')}
      if (data.n35) {} else { $("[data-apartment-id=35]").addClass('sold')}
      if (data.n36) {} else { $("[data-apartment-id=36]").addClass('sold')}

      if (data.n65) {} else { $("[data-apartment-id=65]").addClass('sold')}
      if (data.n66) {} else { $("[data-apartment-id=66]").addClass('sold')}
      if (data.n67) {} else { $("[data-apartment-id=67]").addClass('sold')}
      if (data.n68) {} else { $("[data-apartment-id=68]").addClass('sold')}
      if (data.n69) {} else { $("[data-apartment-id=69]").addClass('sold')}

      if (data.n105) {} else { $("[data-apartment-id=105]").addClass('sold')}
      if (data.n106) {} else { $("[data-apartment-id=106]").addClass('sold')}
      if (data.n107) {} else { $("[data-apartment-id=107]").addClass('sold')}
      if (data.n108) {} else { $("[data-apartment-id=108]").addClass('sold')}
      if (data.n109) {} else { $("[data-apartment-id=109]").addClass('sold')}

      // round 3
      if (data.n5) {} else { $("[data-apartment-id=5]").addClass('sold')}
      if (data.n6) {} else { $("[data-apartment-id=6]").addClass('sold')}
      if (data.n7) {} else { $("[data-apartment-id=7]").addClass('sold')}
      if (data.n8) {} else { $("[data-apartment-id=8]").addClass('sold')}

      if (data.n37) {} else { $("[data-apartment-id=37]").addClass('sold')}
      if (data.n38) {} else { $("[data-apartment-id=38]").addClass('sold')}
      if (data.n39) {} else { $("[data-apartment-id=39]").addClass('sold')}
      if (data.n40) {} else { $("[data-apartment-id=40]").addClass('sold')}

      if (data.n70) {} else { $("[data-apartment-id=70]").addClass('sold')}
      if (data.n71) {} else { $("[data-apartment-id=71]").addClass('sold')}
      if (data.n72) {} else { $("[data-apartment-id=72]").addClass('sold')}
      if (data.n73) {} else { $("[data-apartment-id=73]").addClass('sold')}
      if (data.n74) {} else { $("[data-apartment-id=74]").addClass('sold')}

      if (data.n110) {} else { $("[data-apartment-id=110]").addClass('sold')}
      if (data.n111) {} else { $("[data-apartment-id=111]").addClass('sold')}
      if (data.n112) {} else { $("[data-apartment-id=112]").addClass('sold')}
      if (data.n113) {} else { $("[data-apartment-id=113]").addClass('sold')}
      if (data.n114) {} else { $("[data-apartment-id=114]").addClass('sold')}

      // round 4
      if (data.n9) {} else { $("[data-apartment-id=9]").addClass('sold')}
      if (data.n10) {} else { $("[data-apartment-id=10]").addClass('sold')}
      if (data.n11) {} else { $("[data-apartment-id=11]").addClass('sold')}
      if (data.n12) {} else { $("[data-apartment-id=12]").addClass('sold')}

      if (data.n41) {} else { $("[data-apartment-id=41]").addClass('sold')}
      if (data.n42) {} else { $("[data-apartment-id=42]").addClass('sold')}
      if (data.n43) {} else { $("[data-apartment-id=43]").addClass('sold')}
      if (data.n44) {} else { $("[data-apartment-id=44]").addClass('sold')}

      if (data.n75) {} else { $("[data-apartment-id=75]").addClass('sold')}
      if (data.n76) {} else { $("[data-apartment-id=76]").addClass('sold')}
      if (data.n77) {} else { $("[data-apartment-id=77]").addClass('sold')}
      if (data.n78) {} else { $("[data-apartment-id=78]").addClass('sold')}
      if (data.n79) {} else { $("[data-apartment-id=79]").addClass('sold')}

      if (data.n115) {} else { $("[data-apartment-id=115]").addClass('sold')}
      if (data.n116) {} else { $("[data-apartment-id=116]").addClass('sold')}
      if (data.n117) {} else { $("[data-apartment-id=117]").addClass('sold')}
      if (data.n118) {} else { $("[data-apartment-id=118]").addClass('sold')}
      if (data.n119) {} else { $("[data-apartment-id=119]").addClass('sold')}

      // round 5
      if (data.n13) {} else { $("[data-apartment-id=13]").addClass('sold')}
      if (data.n14) {} else { $("[data-apartment-id=14]").addClass('sold')}
      if (data.n15) {} else { $("[data-apartment-id=15]").addClass('sold')}
      if (data.n16) {} else { $("[data-apartment-id=16]").addClass('sold')}

      if (data.n45) {} else { $("[data-apartment-id=45]").addClass('sold')}
      if (data.n46) {} else { $("[data-apartment-id=46]").addClass('sold')}
      if (data.n47) {} else { $("[data-apartment-id=47]").addClass('sold')}
      if (data.n48) {} else { $("[data-apartment-id=48]").addClass('sold')}

      if (data.n80) {} else { $("[data-apartment-id=80]").addClass('sold')}
      if (data.n81) {} else { $("[data-apartment-id=81]").addClass('sold')}
      if (data.n82) {} else { $("[data-apartment-id=82]").addClass('sold')}
      if (data.n83) {} else { $("[data-apartment-id=83]").addClass('sold')}
      if (data.n84) {} else { $("[data-apartment-id=84]").addClass('sold')}

      if (data.n120) {} else { $("[data-apartment-id=120]").addClass('sold')}
      if (data.n121) {} else { $("[data-apartment-id=121]").addClass('sold')}
      if (data.n122) {} else { $("[data-apartment-id=122]").addClass('sold')}
      if (data.n123) {} else { $("[data-apartment-id=123]").addClass('sold')}
      if (data.n124) {} else { $("[data-apartment-id=124]").addClass('sold')}

      // round 6
      if (data.n17) {} else { $("[data-apartment-id=17]").addClass('sold')}
      if (data.n18) {} else { $("[data-apartment-id=18]").addClass('sold')}
      if (data.n19) {} else { $("[data-apartment-id=19]").addClass('sold')}
      if (data.n20) {} else { $("[data-apartment-id=20]").addClass('sold')}

      if (data.n49) {} else { $("[data-apartment-id=49]").addClass('sold')}
      if (data.n50) {} else { $("[data-apartment-id=50]").addClass('sold')}
      if (data.n51) {} else { $("[data-apartment-id=51]").addClass('sold')}
      if (data.n52) {} else { $("[data-apartment-id=52]").addClass('sold')}

      if (data.n85) {} else { $("[data-apartment-id=85]").addClass('sold')}
      if (data.n86) {} else { $("[data-apartment-id=86]").addClass('sold')}
      if (data.n87) {} else { $("[data-apartment-id=87]").addClass('sold')}
      if (data.n88) {} else { $("[data-apartment-id=88]").addClass('sold')}
      if (data.n89) {} else { $("[data-apartment-id=89]").addClass('sold')}

      if (data.n125) {} else { $("[data-apartment-id=125]").addClass('sold')}
      if (data.n126) {} else { $("[data-apartment-id=126]").addClass('sold')}
      if (data.n127) {} else { $("[data-apartment-id=127]").addClass('sold')}
      if (data.n128) {} else { $("[data-apartment-id=128]").addClass('sold')}
      if (data.n129) {} else { $("[data-apartment-id=129]").addClass('sold')}

      // round 7
      let true7 = 0

      if (data.n21) {} else { $("[data-apartment-id=21]").addClass('sold')}
      if (data.n22) {} else { $("[data-apartment-id=22]").addClass('sold')}
      if (data.n23) {} else { $("[data-apartment-id=23]").addClass('sold')}
      if (data.n24) {} else { $("[data-apartment-id=24]").addClass('sold')}

      if (data.n53) {} else { $("[data-apartment-id=53]").addClass('sold')}
      if (data.n54) {} else { $("[data-apartment-id=54]").addClass('sold')}
      if (data.n55) {} else { $("[data-apartment-id=55]").addClass('sold')}
      if (data.n56) {} else { $("[data-apartment-id=56]").addClass('sold')}

      if (data.n90) {} else { $("[data-apartment-id=90]").addClass('sold')}
      if (data.n91) {} else { $("[data-apartment-id=91]").addClass('sold')}
      if (data.n92) {} else { $("[data-apartment-id=92]").addClass('sold')}
      if (data.n93) {} else { $("[data-apartment-id=93]").addClass('sold')}
      if (data.n94) {} else { $("[data-apartment-id=94]").addClass('sold')}

      if (data.n30) {} else { $("[data-apartment-id=30]").addClass('sold')}
      if (data.n31) {} else { $("[data-apartment-id=31]").addClass('sold')}
      if (data.n32) {} else { $("[data-apartment-id=32]").addClass('sold')}
      if (data.n33) {} else { $("[data-apartment-id=33]").addClass('sold')}
      if (data.n34) {} else { $("[data-apartment-id=34]").addClass('sold')}

      // round 8
      if (data.n25) {} else { $("[data-apartment-id=25]").addClass('sold')}
      if (data.n26) {} else { $("[data-apartment-id=26]").addClass('sold')}
      if (data.n27) {} else { $("[data-apartment-id=27]").addClass('sold')}
      if (data.n28) {} else { $("[data-apartment-id=28]").addClass('sold')}

      if (data.n57) {} else { $("[data-apartment-id=57]").addClass('sold')}
      if (data.n58) {} else { $("[data-apartment-id=58]").addClass('sold')}
      if (data.n59) {} else { $("[data-apartment-id=59]").addClass('sold')}
      if (data.n60) {} else { $("[data-apartment-id=60]").addClass('sold')}

      if (data.n95) {} else { $("[data-apartment-id=95]").addClass('sold')}
      if (data.n96) {} else { $("[data-apartment-id=96]").addClass('sold')}
      if (data.n97) {} else { $("[data-apartment-id=97]").addClass('sold')}
      if (data.n98) {} else { $("[data-apartment-id=98]").addClass('sold')}
      if (data.n99) {} else { $("[data-apartment-id=99]").addClass('sold')}

      if (data.n135) {} else { $("[data-apartment-id=135]").addClass('sold')}
      if (data.n136) {} else { $("[data-apartment-id=136]").addClass('sold')}
      if (data.n137) {} else { $("[data-apartment-id=137]").addClass('sold')}
      if (data.n138) {} else { $("[data-apartment-id=138]").addClass('sold')}
      if (data.n139) {} else { $("[data-apartment-id=139]").addClass('sold')}

      // round 9
      if (data.n29) {} else { $("[data-apartment-id=29]").addClass('sold')}
      if (data.n30) {} else { $("[data-apartment-id=30]").addClass('sold')}
      if (data.n31) {} else { $("[data-apartment-id=31]").addClass('sold')}
      if (data.n32) {} else { $("[data-apartment-id=32]").addClass('sold')}

      if (data.n61) {} else { $("[data-apartment-id=61]").addClass('sold')}
      if (data.n62) {} else { $("[data-apartment-id=62]").addClass('sold')}
      if (data.n63) {} else { $("[data-apartment-id=63]").addClass('sold')}
      if (data.n64) {} else { $("[data-apartment-id=64]").addClass('sold')}

      if (data.n100) {} else { $("[data-apartment-id=100]").addClass('sold')}
      if (data.n101) {} else { $("[data-apartment-id=101]").addClass('sold')}
      if (data.n102) {} else { $("[data-apartment-id=102]").addClass('sold')}
      if (data.n103) {} else { $("[data-apartment-id=103]").addClass('sold')}
      if (data.n104) {} else { $("[data-apartment-id=104]").addClass('sold')}

      if (data.n140) {} else { $("[data-apartment-id=140]").addClass('sold')}
      if (data.n141) {} else { $("[data-apartment-id=141]").addClass('sold')}
      if (data.n142) {} else { $("[data-apartment-id=142]").addClass('sold')}
      if (data.n143) {} else { $("[data-apartment-id=143]").addClass('sold')}
      if (data.n144) {} else { $("[data-apartment-id=144]").addClass('sold')}
    }
  });
}

// функція додавання інфо про квартиру при наведенні в плані поверху
let isItInApartment = false;
funcShowInfo = function(numOfApartment){
  $('[data-apartment-id=' + numOfApartment + ']').mouseover(function(){
    if (!isItInApartment) {
      $('#numOfApartmnet').append(numOfApartment)
      $.ajax({
        "method": "GET",
        'url': "https://sashahjggggv.github.io/photos-great-house/144.json",
        'success': function(data){
          if (eval('data.n' + numOfApartment)) {$('#trueInfo').append('Квартира доступна')} else {$('#falseInfo').append('Квартира продана')}
        }
      });
      $.ajax({
        "method": "GET",
        'url': "https://sashahjggggv.github.io/photos-great-house/144/" + numOfApartment + "/areas.json",
        'success': function(data){
          $('#allPlace').append(data.all)
        }
      });
      $('.round-bti__apartment-info,.round__apartment-info').addClass('active')
      isItInApartment = true;
    }
  })
  $('[data-apartment-id=' + numOfApartment + ']').mouseleave(function(){
    $('.round-bti__apartment-info,.round__apartment-info').removeClass('active')
    $('#numOfApartmnet,#trueInfo,#falseInfo,#allPlace').empty()
    isItInApartment = false;
  })    
}
funcShowInfoBlockApartment = function(){
  for(let i = 0; i < 145; i++) {
    funcShowInfo(i);
  }
}

$(window).on('load', function () {
  $('.loader').addClass('hide');
}) 