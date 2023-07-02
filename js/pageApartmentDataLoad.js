// функція створення діва, імг і їх підстановку в галерею
funcLoadImg = function(numOfType, numOfImg) {
  let div = document.createElement("div");
  let img = document.createElement('img');
  img.classList.add("gallery__card-item");
  img.src = "https://sashahjggggv.github.io/photos-great-house/apartments/type" + numOfType + "/inside-models/" + numOfImg + ".jpg";
  div.appendChild(img);
  let movable = document.getElementById("movable");
  movable.appendChild(div);
}

// функція підгрузки картинок для основної галереї по типах
funcLoadGalleryImg = function(numOfType) {
  if (numOfType == 1 || numOfType == 2 || numOfType == 3 || numOfType == 4 || numOfType == 5 || numOfType == 6 || numOfType == 7 || numOfType == 8 || numOfType == 9 || numOfType == 10 || numOfType == 11 || numOfType == 12 || numOfType == 13 || numOfType == 14 || numOfType == 15 || numOfType == 16 || numOfType == 17 || numOfType == 18) {
    funcLoadImg(numOfType, 1);
    funcLoadImg(numOfType, 2);
    funcLoadImg(numOfType, 3);
    funcLoadImg(numOfType, 4);
    funcLoadImg(numOfType, 5);
    funcLoadImg(numOfType, 6);
  }
  // if (numOfType == 2) {
  //   funcLoadImg(numOfType, 1);
  //   funcLoadImg(numOfType, 2);
  //   funcLoadImg(numOfType, 3);
  //   funcLoadImg(numOfType, 4);
  //   funcLoadImg(numOfType, 5);
  //   funcLoadImg(numOfType, 6);
  //   funcLoadImg(numOfType, 7);
  //   funcLoadImg(numOfType, 8);
  //   funcLoadImg(numOfType, 9);
  //   funcLoadImg(numOfType, 10);
  // }
  // if (numOfType == 3) {
  //   funcLoadImg(numOfType, 1);
  //   funcLoadImg(numOfType, 2);
  //   funcLoadImg(numOfType, 3);
  //   funcLoadImg(numOfType, 4);
  //   funcLoadImg(numOfType, 5);
  //   funcLoadImg(numOfType, 6);
  //   funcLoadImg(numOfType, 7);
  //   funcLoadImg(numOfType, 8);
  //   funcLoadImg(numOfType, 9);
  //   funcLoadImg(numOfType, 10);
  // }
  // if (numOfType == 4) {
  //   funcLoadImg(numOfType, 1);
  //   funcLoadImg(numOfType, 2);
  //   funcLoadImg(numOfType, 3);
  //   funcLoadImg(numOfType, 4);
  //   funcLoadImg(numOfType, 5);
  //   funcLoadImg(numOfType, 6);
  //   funcLoadImg(numOfType, 7);
  //   funcLoadImg(numOfType, 8);
  //   funcLoadImg(numOfType, 9);
  //   funcLoadImg(numOfType, 10);
  //   funcLoadImg(numOfType, 11);
  // }
  // if (numOfType == 5) {
  //   funcLoadImg(numOfType, 1);
  //   funcLoadImg(numOfType, 2);
  //   funcLoadImg(numOfType, 3);
  //   funcLoadImg(numOfType, 4);
  //   funcLoadImg(numOfType, 5);
  //   funcLoadImg(numOfType, 6);
  //   funcLoadImg(numOfType, 7);
  //   funcLoadImg(numOfType, 8);
  //   funcLoadImg(numOfType, 9);
  //   funcLoadImg(numOfType, 10);
  //   funcLoadImg(numOfType, 11);
  //   funcLoadImg(numOfType, 12);
  //   funcLoadImg(numOfType, 13);
  // }
  // if (numOfType == 6) {
  //   funcLoadImg(numOfType, 1);
  // }
  // if (numOfType == 7) {
  //   funcLoadImg(numOfType, 1);
  // }
  // if (numOfType == 8) {
  //   funcLoadImg(numOfType, 1);
  // }
  // if (numOfType == 9) {
  //   funcLoadImg(numOfType, 1);
  // }
  // if (numOfType == 10) {
  //   funcLoadImg(numOfType, 1);
  // }
  // if (numOfType == 11) {
  //   funcLoadImg(numOfType, 1);
  // }
  funcSlideTopGallery()
}

// функція створення діва, імг і їх підстановку в вигляди з вікна
funcLoadWindowLooks = function(side, numOfImg) {
  let div = document.createElement("div");
  let img = document.createElement('img');
  img.classList.add("window__card-item");
  img.src = "https://sashahjggggv.github.io/photos-great-house/window-looks/" + side + "/" + numOfImg + ".jpg";
  div.appendChild(img);
  let movable2 = document.getElementById("movable2");
  movable2.appendChild(div);
}
// функція підгрузки картинок для виглядів з вікна
funcLoadAllWindowLooks = function(side) {
  if (side == "E") {
    funcLoadWindowLooks(side, 1);
    funcLoadWindowLooks(side, 2);
    funcLoadWindowLooks(side, 3);
    funcLoadWindowLooks(side, 4);
  }
  if (side == "ES") {
    funcLoadWindowLooks(side, 1);
  }
  if (side == "N") {
    funcLoadWindowLooks(side, 1);
    funcLoadWindowLooks(side, 2);
    funcLoadWindowLooks(side, 3);
    funcLoadWindowLooks(side, 4);
  }
  if (side == "NE") {
    funcLoadWindowLooks(side, 1);
    funcLoadWindowLooks(side, 2);
    funcLoadWindowLooks(side, 3);
    funcLoadWindowLooks(side, 4);
    funcLoadWindowLooks(side, 5);
    funcLoadWindowLooks(side, 6);
    funcLoadWindowLooks(side, 7);
    funcLoadWindowLooks(side, 8);
  }
  if (side == "NEW") {
    funcLoadWindowLooks(side, 1);
    funcLoadWindowLooks(side, 2);
    funcLoadWindowLooks(side, 3);
    funcLoadWindowLooks(side, 4);
    funcLoadWindowLooks(side, 5);
    funcLoadWindowLooks(side, 6);
    funcLoadWindowLooks(side, 7);
    funcLoadWindowLooks(side, 8);
  }
  if (side == "NS") {
    funcLoadWindowLooks(side, 1);
    funcLoadWindowLooks(side, 2);
    funcLoadWindowLooks(side, 3);
    funcLoadWindowLooks(side, 4);
    funcLoadWindowLooks(side, 5);
    funcLoadWindowLooks(side, 6);
    funcLoadWindowLooks(side, 7);
    funcLoadWindowLooks(side, 8);
    funcLoadWindowLooks(side, 9);
    funcLoadWindowLooks(side, 10);
    funcLoadWindowLooks(side, 11);
    funcLoadWindowLooks(side, 12);
  }
  if (side == "S") {
    funcLoadWindowLooks(side, 1);
    funcLoadWindowLooks(side, 2);
    funcLoadWindowLooks(side, 3);
    funcLoadWindowLooks(side, 4);
    funcLoadWindowLooks(side, 5);
    funcLoadWindowLooks(side, 6);
    funcLoadWindowLooks(side, 7);
    funcLoadWindowLooks(side, 8);
    funcLoadWindowLooks(side, 9);
    funcLoadWindowLooks(side, 10);
  }
  if (side == "SW") {
    funcLoadWindowLooks(side, 1);
    funcLoadWindowLooks(side, 2);
    funcLoadWindowLooks(side, 3);
    funcLoadWindowLooks(side, 4);
    funcLoadWindowLooks(side, 5);
    funcLoadWindowLooks(side, 6);
    funcLoadWindowLooks(side, 7);
  }
  if (side == "W") {
    funcLoadWindowLooks(side, 1);
    funcLoadWindowLooks(side, 2);
    funcLoadWindowLooks(side, 3);
  }
  if (side == "WN") {
    funcLoadWindowLooks(side, 1);
    funcLoadWindowLooks(side, 2);
    funcLoadWindowLooks(side, 3);
    funcLoadWindowLooks(side, 4);
    funcLoadWindowLooks(side, 5);
    funcLoadWindowLooks(side, 6);
  }
  funcSlideWindowGallery()
}

// функція підгрузки всіх файлів по типу квартири
funcLoadType = function(numOfType) {
  funcLoadGalleryImg(numOfType)

  // підгрузка фону бті плану
  document.getElementById('bti-plan').src = "https://sashahjggggv.github.io/photos-great-house/apartments/type" + numOfType + "/bti-plan.png";

  // підгрузка свг бті плану
  $.ajax({
    "method": "GET",
    'url': "https://sashahjggggv.github.io/photos-great-house/apartments/type" + numOfType + "/bti-plan.svg",
    'success': function(data){
      document.getElementById('bti-plan-content').appendChild(data.documentElement)
      funcBtiHover()
    }
  });

  // підгрузка опису за типом квартири
  $.ajax({
    "method": "GET",
    'url': "https://sashahjggggv.github.io/photos-great-house/apartments/type" + numOfType + "/description-apartment.json",
    'success': function(data){
      if (data.paragraf) {
        let paragraf = document.createElement('p')
        paragraf.classList.add("paragraf")
        paragraf.innerHTML = data.paragraf
        document.getElementById("textContainer").appendChild(paragraf);
      }
      if (data.paragraf2) {
        let paragraf = document.createElement('p')
        paragraf.classList.add("paragraf")
        paragraf.innerHTML = data.paragraf2
        document.getElementById("textContainer").appendChild(paragraf);
      }
      if (data.paragraf3) {
        let paragraf = document.createElement('p')
        paragraf.classList.add("paragraf")
        paragraf.innerHTML = data.paragraf3
        document.getElementById("textContainer").appendChild(paragraf);
      }
    }
  });

  // підгрузка плану з ремонтом відносно типу
  document.getElementById("furniture-plan").src = "https://sashahjggggv.github.io/photos-great-house/apartments/type" + numOfType + "/furniture-plan.png";

  // функціонал кнопок перепланування і бті
  funcPlanBtns(numOfType);
}

// функція підгрузки картинки поверху 
funcLoadImageRound = function(numOfRound) {

  // background png
  let roundImg = document.getElementById("round__img");
  roundImg.src = "https://sashahjggggv.github.io/photos-great-house/rounds/" + numOfRound + "/0.png"
  let roundIng90 = document.getElementById('round__img-90')
  roundIng90.src = "https://sashahjggggv.github.io/photos-great-house/rounds/" + numOfRound + "/90.png"

  // foreground svg
  $.ajax({
    "method": "GET",
    'url': "https://sashahjggggv.github.io/photos-great-house/rounds/" + numOfRound + "/0.svg",
    'success': function(data){
      let roundContent = document.getElementById('roundContent');
      roundContent.appendChild(data.documentElement);
      $('.apartment').click(function(event){
        window.location.href = "https://greathouse.rv.ua/choose/apartment/?num=" + $(this).attr("data-apartment-id");
      })
      $("[data-apartment-id=" + numOfApartment + "]").addClass('this')
      funcShowFalseApartments()
      funcShowInfoBlockApartment()
    }
  });
  $.ajax({
    "method": "GET",
    'url': "https://sashahjggggv.github.io/photos-great-house/rounds/" + numOfRound + "/90.svg",
    'success': function(data){
      let roundContent = document.getElementById('roundContent');
      roundContent.appendChild(data.documentElement);
      $('.apartment').click(function(event){
        window.location.href = "https://greathouse.rv.ua/choose/apartment/?num=" + $(this).attr("data-apartment-id");
      })
      $("[data-apartment-id=" + numOfApartment + "]").addClass('this')
      funcShowFalseApartments()
      funcShowInfoBlockApartment()
    }
  });
}

// функція підстановки інфи з json в лінію таблиці
funcAddInfoInTable = function(line1, line2, line3, line4, line5, line6, line7, line8, line9, line10, line11, allArea) {

  // функція створення лінії в таблиці
  funcCreateLineInTable = function(numOfRoom, nameOfRoom, areaOfRoom) {
    let tbody = document.getElementById("tbody")
    let tr = document.createElement("tr");
    tr.classList.add("line-table-" + numOfRoom)
    let td1 = document.createElement('td');
    td1.innerHTML = numOfRoom;
    let td2 = document.createElement('td');
    td2.innerHTML = nameOfRoom;
    let td3 = document.createElement('td');
    td3.innerHTML = areaOfRoom;
    // let img = document.createElement('img');
    // img.classList.add("info__click-img");
    // img.src = "../../img/click.png";
  
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    // tr.appendChild(img);
    tbody.appendChild(tr);
  }

  // функція створення останньої лінії в табл
  funcCreateLastLineInTable = function(allArea) {
    let tbody = document.getElementById("tbody")
    let tr = document.createElement("tr");
    tr.classList.add("line-table-last")
    let td1 = document.createElement('td');
    td1.innerHTML = "-";
    let td2 = document.createElement('td');
    td2.innerHTML = "-";
    let td3 = document.createElement('td');
    td3.innerHTML = allArea;
    // let img = document.createElement('img');
    // img.classList.add("info__click-img");
    // img.src = "../../img/click.png";
  
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    // tr.appendChild(img);
    tbody.appendChild(tr);
  }

  if (line1) { funcCreateLineInTable(1, line1[0], line1[1]) };
  if (line2) { funcCreateLineInTable(2, line2[0], line2[1]) };
  if (line3) { funcCreateLineInTable(3, line3[0], line3[1]) };
  if (line4) { funcCreateLineInTable(4, line4[0], line4[1]) };
  if (line5) { funcCreateLineInTable(5, line5[0], line5[1]) };
  if (line6) { funcCreateLineInTable(6, line6[0], line6[1]) };
  if (line7) { funcCreateLineInTable(7, line7[0], line7[1]) };
  if (line8) { funcCreateLineInTable(8, line8[0], line8[1]) };
  if (line9) { funcCreateLineInTable(9, line9[0], line9[1]) };
  if (line10) { funcCreateLineInTable(10, line10[0], line10[1]) };
  if (line11) { funcCreateLineInTable(11, line11[0], line11[1]) };
  if (allArea) { funcCreateLastLineInTable(allArea) }
}

// загрузка файлу json з даними площі, з номером типу
funcLoadAreas = function(numOfApartment) {
  $.ajax({
    "method": "GET",
    'url': "https://sashahjggggv.github.io/photos-great-house/144/" + numOfApartment + "/areas.json",
    'success': function(data){
      let numOfRound = data.round,
      numOfType = data.type;
      let line1 = data.n1,
      line2 = data.n2,
      line3 = data.n3,
      line4 = data.n4,
      line5 = data.n5,
      line6 = data.n6,
      line7 = data.n7,
      line8 = data.n8,
      line9 = data.n9,
      line10 = data.n10,
      line11 = data.n11,
      allArea = data.all;
      funcAddInfoInTable(line1, line2, line3, line4, line5, line6, line7, line8, line9, line10, line11, allArea)
      funcTableHover()

      let side = data.side
      // підгрузка компасу
      let compas = document.getElementById('compas')
      if (side == 'N' || side == 'NEW') {
        compas.src = "https://sashahjggggv.github.io/photos-great-house/window-looks/N.png";
      } if (side == 'S' || side == 'ES' || side == 'NS') {
        compas.src = "https://sashahjggggv.github.io/photos-great-house/window-looks/S.png";
      } if (side == 'W' || side == 'SW' || side == 'WN') {
        compas.src = "https://sashahjggggv.github.io/photos-great-house/window-looks/W.png";
      } if (side == 'E' || side == 'NE') {
        compas.src = "https://sashahjggggv.github.io/photos-great-house/window-looks/E.png";
      } else {
        console.error("compas load")
      }

      funcLoadAllWindowLooks(side)

      funcLoadImageRound(numOfRound);
      funcLoadType(numOfType);
    }
  });
}

// функція підгрузки даних, коли запит від 1-144 квартири
// https://greathouse.rv.ua/choose/apartment/?num=5
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const numOfApartment = urlParams.get('num')
// console.log(numOfApartment)
if (numOfApartment >= 1 && numOfApartment <= 144 ) {

  funcLoadAreas(numOfApartment);

  $('.apartment.' + numOfApartment).addClass('this')

  // добавлення номеру квартири в span
  document.getElementById("numOfApartment").innerHTML = numOfApartment

} else {
  window.location.replace("../");
}

// таблиця (наведення)
funcTableHover = function() {
  $('.line-table-1').mouseover(function(){
    $('g.1').addClass('hover')
  })
  $('.line-table-1').mouseleave(function(){
    $('g.1').removeClass('hover')
  })

  $('.line-table-2').mouseover(function(){
    $('g.2').addClass('hover')
  })
  $('.line-table-2').mouseleave(function(){
    $('g.2').removeClass('hover')
  })

  $('.line-table-3').mouseover(function(){
    $('g.3').addClass('hover')
  })
  $('.line-table-3').mouseleave(function(){
    $('g.3').removeClass('hover')
  })

  $('.line-table-4').mouseover(function(){
    $('g.4').addClass('hover')
  })
  $('.line-table-4').mouseleave(function(){
    $('g.4').removeClass('hover')
  })

  $('.line-table-5').mouseover(function(){
    $('g.5').addClass('hover')
  })
  $('.line-table-5').mouseleave(function(){
    $('g.5').removeClass('hover')
  })

  $('.line-table-6').mouseover(function(){
    $('g.6').addClass('hover')
  })
  $('.line-table-6').mouseleave(function(){
    $('g.6').removeClass('hover')
  })

  $('.line-table-7').mouseover(function(){
    $('g.7').addClass('hover')
  })
  $('.line-table-7').mouseleave(function(){
    $('g.7').removeClass('hover')
  })

  $('.line-table-8').mouseover(function(){
    $('g.8').addClass('hover')
  })
  $('.line-table-8').mouseleave(function(){
    $('g.8').removeClass('hover')
  })

  $('.line-table-9').mouseover(function(){
    $('g.9').addClass('hover')
  })
  $('.line-table-9').mouseleave(function(){
    $('g.9').removeClass('hover')
  })

  $('.line-table-10').mouseover(function(){
    $('g.10').addClass('hover')
  })
  $('.line-table-10').mouseleave(function(){
    $('g.10').removeClass('hover')
  })

  $('.line-table-last').mouseover(function(){
    $('g').addClass('hover')
  })
  $('.line-table-last').mouseleave(function(){
    $('g').removeClass('hover')
  })
}

// план наведення
funcBtiHover = function(){
  $('g.1').mouseover(function(){
    $('g.1,.line-table-1').addClass('hover')
  })
  $('g.1').mouseleave(function(){
    $('g.1,.line-table-1').removeClass('hover')
  })

  $('g.2').mouseover(function(){
    $('g.2,.line-table-2').addClass('hover')
  })
  $('g.2').mouseleave(function(){
    $('g.2,.line-table-2').removeClass('hover')
  })
  
  $('g.3').mouseover(function(){
    $('g.3,.line-table-3').addClass('hover')
  })
  $('g.3').mouseleave(function(){
    $('g.3,.line-table-3').removeClass('hover')
  })
  
  $('g.4').mouseover(function(){
    $('g.4,.line-table-4').addClass('hover')
  })
  $('g.4').mouseleave(function(){
    $('g.4,.line-table-4').removeClass('hover')
  })
  
  $('g.5').mouseover(function(){
    $('g.5,.line-table-5').addClass('hover')
  })
  $('g.5').mouseleave(function(){
    $('g.5,.line-table-5').removeClass('hover')
  })
  
  $('g.6').mouseover(function(){
    $('g.6,.line-table-6').addClass('hover')
  })
  $('g.6').mouseleave(function(){
    $('g.6,.line-table-6').removeClass('hover')
  })
  
  $('g.7').mouseover(function(){
    $('g.7,.line-table-7').addClass('hover')
  })
  $('g.7').mouseleave(function(){
    $('g.7,.line-table-7').removeClass('hover')
  })
  
  $('g.8').mouseover(function(){
    $('g.8,.line-table-8').addClass('hover')
  })
  $('g.8').mouseleave(function(){
    $('g.8,.line-table-8').removeClass('hover')
  })
  
  $('g.9').mouseover(function(){
    $('g.9,.line-table-9').addClass('hover')
  })
  $('g.9').mouseleave(function(){
    $('g.9,.line-table-9').removeClass('hover')
  })
  
  $('g.10').mouseover(function(){
    $('g.10,.line-table-10').addClass('hover')
  })
  $('g.10').mouseleave(function(){
    $('g.10,.line-table-10').removeClass('hover')
  })
}

// скрол після натиснення на таблицю
$('.info__table').click(function(){
  $('.bti-btn').click()
  $('.info__bti-plan')[0].scrollIntoView({behavior: "smooth"});
})

// функціонал кнопок перепланування і бті
funcPlanBtns = function(numOfType){
  $('.plan-v1').click(function(){
    $('.bti-btn,.plan-v2,.plan-v3').removeClass('active')
    $('.plan-v1').addClass('active')
    $('.bti-svg').addClass('hide')
    document.getElementById('bti-plan').src = "https://sashahjggggv.github.io/photos-great-house/apartments/type" + numOfType + "/variant-plan/1.png"
  })
  $('.plan-v2').click(function(){
    $('.bti-btn,.plan-v1,.plan-v3').removeClass('active')
    $('.plan-v2').addClass('active')
    $('.bti-svg').addClass('hide')
    document.getElementById('bti-plan').src = "https://sashahjggggv.github.io/photos-great-house/apartments/type" + numOfType + "/variant-plan/2.png"
  })
  $('.plan-v3').click(function(){
    $('.bti-btn,.plan-v1,.plan-v2').removeClass('active')
    $('.plan-v3').addClass('active')
    $('.bti-svg').addClass('hide')
    document.getElementById('bti-plan').src = "https://sashahjggggv.github.io/photos-great-house/apartments/type" + numOfType + "/variant-plan/3.png"
  })
  $('.bti-btn').click(function(){
    $('.plan-v1,.plan-v2,.plan-v3').removeClass('active')
    $('.bti-btn').addClass('active')
    $('.bti-svg').removeClass('hide')
    document.getElementById('bti-plan').src = "https://sashahjggggv.github.io/photos-great-house/apartments/type" + numOfType + "/bti-plan.png"
  })
}


// визначення чи продана квартира
console.log(numOfApartment)
$.ajax({
  "method": "GET",
  'url': "https://sashahjggggv.github.io/photos-great-house/144.json",
  'success': function(data){
    if (eval('data.n' + numOfApartment)) {
      $('#trueApartment').append('Квартира доступна')
      $('.gallery__true-false-info').addClass('true')
    } else {
      $('#falseApartment').append('Квартира продана')
      $('.gallery__true-false-info').addClass('false')
    }
  }
});