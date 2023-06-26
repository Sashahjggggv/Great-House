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
  if (numOfType == 1) {
    funcLoadImg(numOfType, 1);
    funcLoadImg(numOfType, 2);
    funcLoadImg(numOfType, 3);
    funcLoadImg(numOfType, 4);
    funcLoadImg(numOfType, 5);
    funcLoadImg(numOfType, 6);
  }
  if (numOfType == 2) {
    funcLoadImg(numOfType, 1);
    funcLoadImg(numOfType, 2);
    funcLoadImg(numOfType, 3);
    funcLoadImg(numOfType, 4);
    funcLoadImg(numOfType, 5);
    funcLoadImg(numOfType, 6);
    funcLoadImg(numOfType, 7);
    funcLoadImg(numOfType, 8);
    funcLoadImg(numOfType, 9);
    funcLoadImg(numOfType, 10);
  }
  if (numOfType == 3) {
    funcLoadImg(numOfType, 1);
    funcLoadImg(numOfType, 2);
    funcLoadImg(numOfType, 3);
    funcLoadImg(numOfType, 4);
    funcLoadImg(numOfType, 5);
    funcLoadImg(numOfType, 6);
    funcLoadImg(numOfType, 7);
    funcLoadImg(numOfType, 8);
    funcLoadImg(numOfType, 9);
    funcLoadImg(numOfType, 10);
  }
  if (numOfType == 4) {
    funcLoadImg(numOfType, 1);
    funcLoadImg(numOfType, 2);
    funcLoadImg(numOfType, 3);
    funcLoadImg(numOfType, 4);
    funcLoadImg(numOfType, 5);
    funcLoadImg(numOfType, 6);
    funcLoadImg(numOfType, 7);
    funcLoadImg(numOfType, 8);
    funcLoadImg(numOfType, 9);
    funcLoadImg(numOfType, 10);
    funcLoadImg(numOfType, 11);
  }
  if (numOfType == 5) {
    funcLoadImg(numOfType, 1);
    funcLoadImg(numOfType, 2);
    funcLoadImg(numOfType, 3);
    funcLoadImg(numOfType, 4);
    funcLoadImg(numOfType, 5);
    funcLoadImg(numOfType, 6);
    funcLoadImg(numOfType, 7);
    funcLoadImg(numOfType, 8);
    funcLoadImg(numOfType, 9);
    funcLoadImg(numOfType, 10);
    funcLoadImg(numOfType, 11);
    funcLoadImg(numOfType, 12);
    funcLoadImg(numOfType, 13);
  }
  if (numOfType == 6) {
    funcLoadImg(numOfType, 1);
  }
  if (numOfType == 7) {
    funcLoadImg(numOfType, 1);
  }
  if (numOfType == 8) {
    funcLoadImg(numOfType, 1);
  }
  if (numOfType == 9) {
    funcLoadImg(numOfType, 1);
  }
  if (numOfType == 10) {
    funcLoadImg(numOfType, 1);
  }
  if (numOfType == 11) {
    funcLoadImg(numOfType, 1);
  }
  funcSlideTopGallery()
}

// функція створення діва, імг і їх підстановку в вигляди з вікна
funcLoadWindowLooks = function(side, numOfImg) {
  let div = document.createElement("div");
  let img = document.createElement('img');
  img.classList.add("window__card-item");
  img.src = "https://sashahjggggv.github.io/photos-great-house/window-looks/" + side + "/" + numOfImg + ".JPG";
  div.appendChild(img);
  let movable2 = document.getElementById("movable2");
  movable2.appendChild(div);
}
// функція підгрузки картинок для виглядів з вікна
funcLoadAllWindowLooks = function(side) {
  if (side == "E") {
    console.log('eee')
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
    funcLoadWindowLooks(side, 9);
    funcLoadWindowLooks(side, 10);
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
    funcLoadWindowLooks(side, 13);
    funcLoadWindowLooks(side, 14);
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
    funcLoadWindowLooks(side, 8);
    funcLoadWindowLooks(side, 9);
    funcLoadWindowLooks(side, 10);
    funcLoadWindowLooks(side, 11);
    funcLoadWindowLooks(side, 12);
    funcLoadWindowLooks(side, 13);
    funcLoadWindowLooks(side, 14);
    funcLoadWindowLooks(side, 15);
    funcLoadWindowLooks(side, 16);
    funcLoadWindowLooks(side, 17);
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
    funcLoadWindowLooks(side, 7);
  }
  funcSlideFooterGallery()
}
funcLoadAllWindowLooks()

// функція підгрузки всіх файлів по типу квартири
funcLoadType = function(numOfType) {
  funcLoadGalleryImg(numOfType)

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
}

// функція підгрузки картинки поверху 
funcLoadImageRound = function(numOfRound) {

  // background png
  let roundImg = document.getElementById("round__img");
  roundImg.src = "https://sashahjggggv.github.io/photos-great-house/rounds/" + numOfRound + "/0.png"

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
    }
  });
}

// функція підстановки інфи з json в лінію таблиці
funcAddInfoInTable = function(line1, line2, line3, line4, line5, line6, line7, line8, line9, line10, line11, allArea) {

  // функція створення лінії в таблиці
  funcCreateLineInTable = function(numOfRoom, nameOfRoom, areaOfRoom) {
    let tbody = document.getElementById("tbody")
    let tr = document.createElement("tr");
    let td1 = document.createElement('td');
    td1.innerHTML = numOfRoom;
    let td2 = document.createElement('td');
    td2.innerHTML = nameOfRoom;
    let td3 = document.createElement('td');
    td3.innerHTML = areaOfRoom;
  
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tbody.appendChild(tr);
  }

  // функція створення останньої лінії в табл
  funcCreateLastLineInTable = function(allArea) {
    let tbody = document.getElementById("tbody")
    let tr = document.createElement("tr");
    let td1 = document.createElement('td');
    td1.innerHTML = "-";
    let td2 = document.createElement('td');
    td2.innerHTML = "-";
    let td3 = document.createElement('td');
    td3.innerHTML = allArea;
  
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
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
let side
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

      side = data.side
      console.log(side)

      funcLoadImageRound(numOfRound);
      funcLoadType(numOfType);

      let compas = document.getElementsByClassName('location__compas')

      if (side == 'N' || side == 'NE') {
        compas.src = "https://sashahjggggv.github.io/photos-great-house/window-looks/N.png";
      } if (side == 'S') {
        compas.src = "https://sashahjggggv.github.io/photos-great-house/window-looks/S.png";
      } if (side == 'W') {
        compas.src = "https://sashahjggggv.github.io/photos-great-house/window-looks/W.png";
      } if (side == 'E') {
        compas.src = "https://sashahjggggv.github.io/photos-great-house/window-looks/E.png";
      } else {
        console.error("compas load")
      }
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

  // підстановка бті плану за номером квартири
  document.getElementById("bti-plan").src = "https://sashahjggggv.github.io/photos-great-house/144/" + numOfApartment + "/bti-plan.png";
} else {
  window.location.replace("../");
}