const time = 2000;
const images = document.querySelectorAll('.slider img');
let currentImage = 0;
const maxImages = images.length;

function nextImage() {
  images[currentImage].classList.remove('selected');

  currentImage++;

  if (currentImage >= maxImages) {
    currentImage = 0;
  }

  images[currentImage].classList.add('selected');
}

function start() {
  setInterval(() => {
    nextImage();
  }, time);
}

window.addEventListener('load', start);
