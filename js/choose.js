loadAndPutSVGBuilding = function() {
  let choose = document.getElementById('choose')
  $.ajax({
    "method": "GET",
    'url': "https://sashahjggggv.github.io/photos-great-house/rounds/building.svg",
    'success': function(data){
      choose.appendChild(data.documentElement);
      $('.choose-round__path-round').click(function(event){
        $(".round-bti").addClass('active')
        $(".round-bti__bg-image").remove()
        $(".round-bti__foreground-svg").remove()
        funcPushImagesRoundBti($(this).attr("data-round-id"))
      })
    }
  });
}
loadAndPutSVGBuilding()

let roundBtiContainer = document.getElementById('roundBtiContainer')
funcPushImagesRoundBti = function(numOfRound) {
  $('round-bti__bg-image').remove();

  $.ajax({
    "method": "GET",
    'url': "https://sashahjggggv.github.io/photos-great-house/rounds/" + numOfRound + "/0.svg",
    'success': function(data){
      let roundContent = document.getElementById('roundContent');
      roundBtiContainer.appendChild(data.documentElement);
      $('.apartment').click(function(event){
        window.location.href = "https://greathouse.rv.ua/choose/apartment/?num=" + $(this).attr("data-apartment-id");
      })
    }
  });

  $.ajax({
    "method": "GET",
    'url': "https://sashahjggggv.github.io/photos-great-house/rounds/" + numOfRound + "/90.svg",
    'success': function(data){
      let roundContent = document.getElementById('roundContent');
      roundBtiContainer.appendChild(data.documentElement);
      $('.apartment').click(function(event){
        window.location.href = "https://greathouse.rv.ua/choose/apartment/?num=" + $(this).attr("data-apartment-id");
      })
    }
  });

  let img = document.createElement('img');
  img.classList.add("round-bti__bg-image");
  img.src = "https://sashahjggggv.github.io/photos-great-house/rounds/" + numOfRound + "/0.png";
  roundBtiContainer.appendChild(img);
  roundBtiContainer.scrollIntoView({behavior: "smooth"});

  let img90 = document.createElement('img');
  img90.classList.add("round-bti__bg-image-90");
  img90.src = "https://sashahjggggv.github.io/photos-great-house/rounds/" + numOfRound + "/90.png";
  roundBtiContainer.appendChild(img90);
  roundBtiContainer.scrollIntoView({behavior: "smooth"});
}