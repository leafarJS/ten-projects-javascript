'use strict';
const d = document;

export default function loadingPage(container, left, right) {
  const _container = d.querySelector(container);
  const _left = d.querySelector(left);
  const _right = d.querySelector(right);

  _left.addEventListener('mouseenter', () => {
    _container.classList.add('active-left');
  });
  _left.addEventListener('mouseleave', () => {
    _container.classList.remove('active-left');
  });
  _right.addEventListener('mouseenter', () => {
    _container.classList.add('active-right');
  });
  _right.addEventListener('mouseleave', () => {
    _container.classList.remove('active-right');
  });
}
