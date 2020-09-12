const button = document.querySelector('.darkmode');
const link1 = document.querySelector('#link1');
const logos = document.querySelectorAll('#logo');

const CACHE_KEY = 'template_history';

function changeColor() {
  button.addEventListener('click', function(event) {
    buttonEvent();
  })
}

function buttonEvent() {
  if(link1.getAttribute("href") === 'asset/css/style.css') {
    link1.setAttribute('href', 'asset/css/style_dark.css');
    for(let logo of logos) {
      logo.setAttribute('src', 'asset/img/paolid_white.png');
    }

  }
  else {
    link1.setAttribute('href', 'asset/css/style.css');
    for(let logo of logos) {
      logo.setAttribute('src', 'asset/img/paolid_black.png');
    }
  }
}

changeColor();
