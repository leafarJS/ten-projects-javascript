'use strict';

const d = document;

export default function search(active, magnifier) {
  const _active = d.querySelector(active);
  d.addEventListener('click', (e) => {
    if (e.target.matches(magnifier)) {
      _active.classList.toggle('active');
    }
  });
}
