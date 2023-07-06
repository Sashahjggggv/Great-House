
// функція вичислення кількості вільних квартир для інфоблоку поверху
funcCalcTrueApartments = function(){
  $.ajax({
    "method": "GET",
    'url': "https://greathouse.rv.ua/data-base/144.json",
    'success': function(data){
      // round 2
      let true2 = 0

      if (data.n1) {true2 = true2 + 1}
      if (data.n2) {true2 = true2 + 1}
      if (data.n3) {true2 = true2 + 1}
      if (data.n4) {true2 = true2 + 1}
      if (data.n33) {true2 = true2 + 1}
      if (data.n34) {true2 = true2 + 1}
      if (data.n35) {true2 = true2 + 1}
      if (data.n36) {true2 = true2 + 1}
      if (data.n65) {true2 = true2 + 1}
      if (data.n66) {true2 = true2 + 1}
      if (data.n67) {true2 = true2 + 1}
      if (data.n68) {true2 = true2 + 1}
      if (data.n69) {true2 = true2 + 1}
      if (data.n105) {true2 = true2 + 1}
      if (data.n106) {true2 = true2 + 1}
      if (data.n107) {true2 = true2 + 1}
      if (data.n108) {true2 = true2 + 1}
      if (data.n109) {true2 = true2 + 1}
      
      let false2 = 18 - true2
      if (false2 == 18) {$('[data-round-id=2]').addClass('sold')}

      $('[data-round-id=2]').mouseover(function(){
        $('.choose-round__round-block').addClass('active')
        $('#numOfRound').append('2')
        $('#trueApartments').append(true2)
        $('#falseApartments').append(false2)
      })
      $('[data-round-id=2]').mouseleave(function(){
        $('.choose-round__round-block').removeClass('active')
        $('#numOfRound,#trueApartments,#falseApartments').empty()
      })
      $('[data-round-id=2]').click(function(){
        
        $('.round-bti__round-block').addClass('active')
        $('#numOfRound1,#trueApartments1,#falseApartments1').empty()
        $('#numOfRound1').append('2')
        $('#trueApartments1').append(true2)
        $('#falseApartments1').append(false2)
      })

      // round 3
      let true3 = 0

      if (data.n5) {true3 = true3 + 1}
      if (data.n6) {true3 = true3 + 1}
      if (data.n7) {true3 = true3 + 1}
      if (data.n8) {true3 = true3 + 1}
      if (data.n37) {true3 = true3 + 1}
      if (data.n38) {true3 = true3 + 1}
      if (data.n39) {true3 = true3 + 1}
      if (data.n40) {true3 = true3 + 1}
      if (data.n70) {true3 = true3 + 1}
      if (data.n71) {true3 = true3 + 1}
      if (data.n72) {true3 = true3 + 1}
      if (data.n73) {true3 = true3 + 1}
      if (data.n74) {true3 = true3 + 1}
      if (data.n110) {true3 = true3 + 1}
      if (data.n111) {true3 = true3 + 1}
      if (data.n112) {true3 = true3 + 1}
      if (data.n113) {true3 = true3 + 1}
      if (data.n114) {true3 = true3 + 1}
      
      let false3 = 18 - true3
      if (false3 == 18) {$('[data-round-id=3]').addClass('sold')}

      $('[data-round-id=3]').mouseover(function(){
        $('.choose-round__round-block').addClass('active')
        $('#numOfRound').append('3')
        $('#trueApartments').append(true3)
        $('#falseApartments').append(false3)
      })
      $('[data-round-id=3]').mouseleave(function(){
        $('.choose-round__round-block').removeClass('active')
        $('#numOfRound,#trueApartments,#falseApartments').empty()
      })
      $('[data-round-id=3]').click(function(){
        
        $('.round-bti__round-block').addClass('active')
        $('#numOfRound1,#trueApartments1,#falseApartments1').empty()
        $('#numOfRound1').append('3')
        $('#trueApartments1').append(true3)
        $('#falseApartments1').append(false3)
      })

      // round 4
      let true4 = 0

      if (data.n9) {true4 = true4 + 1}
      if (data.n10) {true4 = true4 + 1}
      if (data.n11) {true4 = true4 + 1}
      if (data.n12) {true4 = true4 + 1}
      if (data.n41) {true4 = true4 + 1}
      if (data.n42) {true4 = true4 + 1}
      if (data.n43) {true4 = true4 + 1}
      if (data.n44) {true4 = true4 + 1}
      if (data.n75) {true4 = true4 + 1}
      if (data.n76) {true4 = true4 + 1}
      if (data.n77) {true4 = true4 + 1}
      if (data.n78) {true4 = true4 + 1}
      if (data.n79) {true4 = true4 + 1}
      if (data.n115) {true4 = true4 + 1}
      if (data.n116) {true4 = true4 + 1}
      if (data.n117) {true4 = true4 + 1}
      if (data.n118) {true4 = true4 + 1}
      if (data.n119) {true4 = true4 + 1}
      
      let false4 = 18 - true4
      if (false4 == 18) {$('[data-round-id=4]').addClass('sold')}

      $('[data-round-id=4]').mouseover(function(){
        $('.choose-round__round-block').addClass('active')
        $('#numOfRound').append('4')
        $('#trueApartments').append(true4)
        $('#falseApartments').append(false4)
      })
      $('[data-round-id=4]').mouseleave(function(){
        $('.choose-round__round-block').removeClass('active')
        $('#numOfRound,#trueApartments,#falseApartments').empty()
      })
      $('[data-round-id=4]').click(function(){
        
        $('.round-bti__round-block').addClass('active')
        $('#numOfRound1,#trueApartments1,#falseApartments1').empty()
        $('#numOfRound1').append('4')
        $('#trueApartments1').append(true4)
        $('#falseApartments1').append(false4)
      })

      // round 5
      let true5 = 0

      if (data.n13) {true5 = true5 + 1}
      if (data.n14) {true5 = true5 + 1}
      if (data.n15) {true5 = true5 + 1}
      if (data.n16) {true5 = true5 + 1}
      if (data.n45) {true5 = true5 + 1}
      if (data.n46) {true5 = true5 + 1}
      if (data.n47) {true5 = true5 + 1}
      if (data.n48) {true5 = true5 + 1}
      if (data.n80) {true5 = true5 + 1}
      if (data.n81) {true5 = true5 + 1}
      if (data.n82) {true5 = true5 + 1}
      if (data.n83) {true5 = true5 + 1}
      if (data.n84) {true5 = true5 + 1}
      if (data.n120) {true5 = true5 + 1}
      if (data.n121) {true5 = true5 + 1}
      if (data.n122) {true5 = true5 + 1}
      if (data.n123) {true5 = true5 + 1}
      if (data.n124) {true5 = true5 + 1}
      
      let false5 = 18 - true5
      if (false5 == 18) {$('[data-round-id=5]').addClass('sold')}

      $('[data-round-id=5]').mouseover(function(){
        $('.choose-round__round-block').addClass('active')
        $('#numOfRound').append('5')
        $('#trueApartments').append(true5)
        $('#falseApartments').append(false5)
      })
      $('[data-round-id=5]').mouseleave(function(){
        $('.choose-round__round-block').removeClass('active')
        $('#numOfRound,#trueApartments,#falseApartments').empty()
      })
      $('[data-round-id=5]').click(function(){
        
        $('.round-bti__round-block').addClass('active')
        $('#numOfRound1,#trueApartments1,#falseApartments1').empty()
        $('#numOfRound1').append('5')
        $('#trueApartments1').append(true5)
        $('#falseApartments1').append(false5)
      })

      // round 6
      let true6 = 0

      if (data.n17) {true6 = true6 + 1}
      if (data.n18) {true6 = true6 + 1}
      if (data.n19) {true6 = true6 + 1}
      if (data.n20) {true6 = true6 + 1}
      if (data.n49) {true6 = true6 + 1}
      if (data.n50) {true6 = true6 + 1}
      if (data.n51) {true6 = true6 + 1}
      if (data.n52) {true6 = true6 + 1}
      if (data.n85) {true6 = true6 + 1}
      if (data.n86) {true6 = true6 + 1}
      if (data.n87) {true6 = true6 + 1}
      if (data.n88) {true6 = true6 + 1}
      if (data.n89) {true6 = true6 + 1}
      if (data.n125) {true6 = true6 + 1}
      if (data.n126) {true6 = true6 + 1}
      if (data.n127) {true6 = true6 + 1}
      if (data.n128) {true6 = true6 + 1}
      if (data.n129) {true6 = true6 + 1}
      
      let false6 = 18 - true6
      if (false6 == 18) {$('[data-round-id=6]').addClass('sold')}

      $('[data-round-id=6]').mouseover(function(){
        $('.choose-round__round-block').addClass('active')
        $('#numOfRound').append('6')
        $('#trueApartments').append(true6)
        $('#falseApartments').append(false6)
      })
      $('[data-round-id=6]').mouseleave(function(){
        $('.choose-round__round-block').removeClass('active')
        $('#numOfRound,#trueApartments,#falseApartments').empty()
      })
      $('[data-round-id=6]').click(function(){
        
        $('.round-bti__round-block').addClass('active')
        $('#numOfRound1,#trueApartments1,#falseApartments1').empty()
        $('#numOfRound1').append('6')
        $('#trueApartments1').append(true6)
        $('#falseApartments1').append(false6)
      })

      // round 7
      let true7 = 0

      if (data.n21) {true7 = true7 + 1}
      if (data.n22) {true7 = true7 + 1}
      if (data.n23) {true7 = true7 + 1}
      if (data.n24) {true7 = true7 + 1}
      if (data.n53) {true7 = true7 + 1}
      if (data.n54) {true7 = true7 + 1}
      if (data.n55) {true7 = true7 + 1}
      if (data.n56) {true7 = true7 + 1}
      if (data.n90) {true7 = true7 + 1}
      if (data.n91) {true7 = true7 + 1}
      if (data.n92) {true7 = true7 + 1}
      if (data.n93) {true7 = true7 + 1}
      if (data.n94) {true7 = true7 + 1}
      if (data.n30) {true7 = true7 + 1}
      if (data.n31) {true7 = true7 + 1}
      if (data.n32) {true7 = true7 + 1}
      if (data.n33) {true7 = true7 + 1}
      if (data.n34) {true7 = true7 + 1}
      
      let false7 = 18 - true7
      if (false7 == 18) {$('[data-round-id=7]').addClass('sold')}

      $('[data-round-id=7]').mouseover(function(){
        $('.choose-round__round-block').addClass('active')
        $('#numOfRound').append('7')
        $('#trueApartments').append(true7)
        $('#falseApartments').append(false7)
      })
      $('[data-round-id=7]').mouseleave(function(){
        $('.choose-round__round-block').removeClass('active')
        $('#numOfRound,#trueApartments,#falseApartments').empty()
      })
      $('[data-round-id=7]').click(function(){
        
        $('.round-bti__round-block').addClass('active')
        $('#numOfRound1,#trueApartments1,#falseApartments1').empty()
        $('#numOfRound1').append('7')
        $('#trueApartments1').append(true7)
        $('#falseApartments1').append(false7)
      })

      // round 8
      let true8 = 0

      if (data.n25) {true8 = true8 + 1}
      if (data.n26) {true8 = true8 + 1}
      if (data.n27) {true8 = true8 + 1}
      if (data.n28) {true8 = true8 + 1}
      if (data.n57) {true8 = true8 + 1}
      if (data.n58) {true8 = true8 + 1}
      if (data.n59) {true8 = true8 + 1}
      if (data.n60) {true8 = true8 + 1}
      if (data.n95) {true8 = true8 + 1}
      if (data.n96) {true8 = true8 + 1}
      if (data.n97) {true8 = true8 + 1}
      if (data.n98) {true8 = true8 + 1}
      if (data.n99) {true8 = true8 + 1}
      if (data.n135) {true8 = true8 + 1}
      if (data.n136) {true8 = true8 + 1}
      if (data.n137) {true8 = true8 + 1}
      if (data.n138) {true8 = true8 + 1}
      if (data.n139) {true8 = true8 + 1}
      
      let false8 = 18 - true8
      if (false8 == 18) {$('[data-round-id=8]').addClass('sold')}

      $('[data-round-id=8]').mouseover(function(){
        $('.choose-round__round-block').addClass('active')
        $('#numOfRound').append('8')
        $('#trueApartments').append(true8)
        $('#falseApartments').append(false8)
      })
      $('[data-round-id=8]').mouseleave(function(){
        $('.choose-round__round-block').removeClass('active')
        $('#numOfRound,#trueApartments,#falseApartments').empty()
      })
      $('[data-round-id=8]').click(function(){
        
        $('.round-bti__round-block').addClass('active')
        $('#numOfRound1,#trueApartments1,#falseApartments1').empty()
        $('#numOfRound1').append('8')
        $('#trueApartments1').append(true8)
        $('#falseApartments1').append(false8)
      })

      // round 9
      let true9 = 0

      if (data.n29) {true9 = true9 + 1}
      if (data.n30) {true9 = true9 + 1}
      if (data.n31) {true9 = true9 + 1}
      if (data.n32) {true9 = true9 + 1}
      if (data.n61) {true9 = true9 + 1}
      if (data.n62) {true9 = true9 + 1}
      if (data.n63) {true9 = true9 + 1}
      if (data.n64) {true9 = true9 + 1}
      if (data.n100) {true9 = true9 + 1}
      if (data.n101) {true9 = true9 + 1}
      if (data.n102) {true9 = true9 + 1}
      if (data.n103) {true9 = true9 + 1}
      if (data.n104) {true9 = true9 + 1}
      if (data.n140) {true9 = true9 + 1}
      if (data.n141) {true9 = true9 + 1}
      if (data.n142) {true9 = true9 + 1}
      if (data.n143) {true9 = true9 + 1}
      if (data.n144) {true9 = true9 + 1}
      
      let false9 = 18 - true9
      if (false9 == 18) {$('[data-round-id=9]').addClass('sold')}

      $('[data-round-id=9]').mouseover(function(){
        $('.choose-round__round-block').addClass('active')
        $('#numOfRound').append('9')
        $('#trueApartments').append(true9)
        $('#falseApartments').append(false9)
      })
      $('[data-round-id=9]').mouseleave(function(){
        $('.choose-round__round-block').removeClass('active')
        $('#numOfRound,#trueApartments,#falseApartments').empty()
      })
      $('[data-round-id=9]').click(function(){
        $('.round-bti__round-block').addClass('active')
        $('#numOfRound1,#trueApartments1,#falseApartments1').empty()
        $('#numOfRound1').append('9')
        $('#trueApartments1').append(true9)
        $('#falseApartments1').append(false9)
      })

      // round 10
      let true10 = 0

      if (data.n145) {true10 = true10 + 1}
      if (data.n146) {true10 = true10 + 1}
      if (data.n147) {true10 = true10 + 1}
      if (data.n148) {true10 = true10 + 1}
      if (data.n149) {true10 = true10 + 1}
      if (data.n150) {true10 = true10 + 1}
      if (data.n151) {true10 = true10 + 1}
      if (data.n152) {true10 = true10 + 1}
      if (data.n153) {true10 = true10 + 1}
      if (data.n154) {true10 = true10 + 1}
      if (data.n155) {true10 = true10 + 1}
      if (data.n156) {true10 = true10 + 1}
      if (data.n157) {true10 = true10 + 1}
      if (data.n158) {true10 = true10 + 1}
      if (data.n159) {true10 = true10 + 1}
      if (data.n160) {true10 = true10 + 1}
      if (data.n161) {true10 = true10 + 1}
      if (data.n162) {true10 = true10 + 1}
      
      let false10 = 18 - true10
      if (false10 == 18) {$('[data-round-id=10]').addClass('sold')}

      $('[data-round-id=10]').mouseover(function(){
        $('.choose-round__round-block').addClass('active')
        $('#numOfRound').append('10')
        $('#trueApartments').append(true10)
        $('#falseApartments').append(false10)
      })
      $('[data-round-id=10]').mouseleave(function(){
        $('.choose-round__round-block').removeClass('active')
        $('#numOfRound,#trueApartments,#falseApartments').empty()
      })
      $('[data-round-id=10]').click(function(){
        $('.round-bti__round-block').addClass('active')
        $('#numOfRound1,#trueApartments1,#falseApartments1').empty()
        $('#numOfRound1').append('10')
        $('#trueApartments1').append(true10)
        $('#falseApartments1').append(false10)
      })
    }
  });
}

loadAndPutSVGBuilding = function() {
  let choose = document.getElementById('choose')
  $.ajax({
    "method": "GET",
    'url': "https://greathouse.rv.ua/data-base/rounds/building.svg",
    'success': function(data){
      choose.appendChild(data.documentElement);
      $('.choose-round__path-round').click(function(event){
        $(".round-bti").addClass('active')
        $(".round-bti__bg-image").remove()
        $(".round-bti__bg-image-90").remove()
        $(".round-bti__foreground-svg").remove()
        $(".round-bti__foreground-svg-90").remove()
        funcPushImagesRoundBti($(this).attr("data-round-id"))
      })
      funcCalcTrueApartments()
    }
  });
}
loadAndPutSVGBuilding()

let roundBtiContainer = document.getElementById('roundBtiContainer')
funcPushImagesRoundBti = function(numOfRound) {
  $('round-bti__bg-image').remove();

  $.ajax({
    "method": "GET",
    'url': "https://greathouse.rv.ua/data-base/rounds/" + numOfRound + "/0.svg",
    'success': function(data){
      let roundContent = document.getElementById('roundContent');
      roundBtiContainer.appendChild(data.documentElement);
      $('.apartment').click(function(event){
        window.location.href = "https://greathouse.rv.ua/choose/apartment/?num=" + $(this).attr("data-apartment-id");
      })
      funcShowInfoBlockApartment()
    }
  });

  $.ajax({
    "method": "GET",
    'url': "https://greathouse.rv.ua/data-base/rounds/" + numOfRound + "/90.svg",
    'success': function(data){
      let roundContent = document.getElementById('roundContent');
      roundBtiContainer.appendChild(data.documentElement);
      $('.apartment').click(function(event){
        window.location.href = "https://greathouse.rv.ua/choose/apartment/?num=" + $(this).attr("data-apartment-id");
      })
      funcShowFalseApartments()
      funcShowInfoBlockApartment()
    }
  });

  let img = document.createElement('img');
  img.classList.add("round-bti__bg-image");
  img.src = "https://greathouse.rv.ua/data-base/rounds/" + numOfRound + "/0.png";
  roundBtiContainer.appendChild(img);
  document.getElementById('round-bti').scrollIntoView({behavior: "smooth"});

  let img90 = document.createElement('img');
  img90.classList.add("round-bti__bg-image-90");
  img90.src = "https://greathouse.rv.ua/data-base/rounds/" + numOfRound + "/90.png";
  roundBtiContainer.appendChild(img90);
  document.getElementById('round-bti').scrollIntoView({behavior: "smooth"});
}

funcShowInfoBlockApartment()