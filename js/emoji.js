'use strict';
const d = document;
const _Acolors = ['red', 'orange', 'gold', 'lightgreen', 'green'];
//

export default function emoji(stars, emoji) {
  const _stars = d.querySelectorAll(stars);
  const _emojis = d.querySelectorAll(emoji);
  _stars.forEach((el, index) => {
    el.addEventListener('click', (e) => {
      updateRating(index);
    });

    function updateRating(idx) {
      _stars.forEach((element, i) => {
        if (i < idx + 1) {
          element.classList.add('active');
        } else {
          element.classList.remove('active');
        }
      });

      _emojis.forEach((el) => {
        el.style.transform = `translateX(-${idx * 50}px)`;
        el.style.color = _Acolors[idx];
      });
    }
    updateRating(0);
  });
}
