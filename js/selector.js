'use strict';
const d = document;

export default function selectorSocialMedia(list, arrow, li, socialP) {
  const _socialP = d.querySelector(socialP);
  const _list = d.querySelector(list);
  const _arrow = d.querySelector(arrow);
  const _lis = d.querySelectorAll(li);

  d.addEventListener('click', (e) => {
    if (e.target.matches('.fas')) {
      _list.classList.toggle('hide');
      _arrow.classList.toggle('rotate');
    }
    _lis.forEach((el) => {
      el.addEventListener('click', (e) => {
        _socialP.innerHTML = el.innerHTML;
        _list.classList.add('hide');
      });
    });
  });
}
