'use strict';
const d = document;

export default function gallery(image) {
  const _image = d.querySelector(image);
  const _prev = d.getElementById(prev);
  const _next = d.getElementById(next);

  let x = 0;
  let timer;

  function updateGallery() {
    _image.style.transform = `perspective(62.5rem) rotateY(${x}deg)`;
    timer = setTimeout(() => {
      x = x - 45;
      updateGallery();
    }, 3000);
  }

  d.addEventListener('click', (e) => {
    if (e.target.matches('#prev')) {
      x = x + 45; //45deg rotate
      clearTimeout(timer);
      updateGallery();
    }
    if (e.target.matches('#next')) {
      x = x - 45; //45deg rotate
      clearTimeout(timer);
      updateGallery();
    }
  });
}
