let thisDomain = 'https://greathouse.rv.ua'

// init type of page (class on body)
let pageType = 0
if (document.body.classList.contains('alex-start-20')) {
  pageType = 20
} if (document.body.classList.contains('alex-start-30')) {
  pageType = 30
} if (document.body.classList.contains('alex-start-40')) {
  pageType = 40
} if (document.body.classList.contains('alex-start-60')) {
  pageType = 60
} if (document.body.classList.contains('alex-start-90')) {
  pageType = 90
} if (document.body.classList.contains('alex-start-100')) {
  pageType = 100
}

// message before redir to prev
let windowNotReady = document.querySelector('.message-page-not-ready');

// redir to home page
let goHomeTimeout = undefined
function goHome() {
  windowNotReady.classList.add('active')
  goHomeTimeout = setTimeout(function() {
    window.location.href = thisDomain;
  }, 10000); // == 10s
}
// when slider position gets the value where page alredy builded
function stopGoingHome() {
  windowNotReady.classList.remove('active')
  goHomeTimeout
  clearTimeout(goHomeTimeout)
}

// redir to home page
function showPageForThisStage(currentStage) {
  if (pageType != 0 && pageType <= currentStage || currentStage == 100) {
    stopGoingHome()
  } else {goHome()}
}

// remove blocks
function removeBlocks(currentStage) {
  if (document.getElementsByClassName('alex-remove-' + currentStage.toString()).length) {
    let elements = document.getElementsByClassName('alex-remove-' + currentStage.toString());
    for (var i = 0; i < elements.length; i++) {
      elements[i].classList.add('block-removed');
    }
  } else {
    let elements = document.getElementsByClassName('alex-remove');
    for (var i = 0; i < elements.length; i++) {
      elements[i].classList.remove('block-removed');
    }
  }
}

// Listen message from alex.rv.ua
window.addEventListener('message', function (event) {
  if (event.origin == 'https://alex.rv.ua') {
    // push data of stage every time when message recived
    showPageForThisStage(event.data)
    removeBlocks(event.data)
  }
});