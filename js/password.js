'use strict';
const d = document;

const createPassword = (input, alert) => {
  const _input = d.querySelector(input);
  const _alert = d.querySelector(alert);
  const chars =
    '0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const passwordLength = 14;
  let password = '';
  for (let i = 0; i < passwordLength; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  _input.value = password;
  console.log(_input.value);
  _alert.innerText = password + '  copied!';
};
//
const copyPassword = (input, alert) => {
  const _input = d.querySelector(input);
  const _alert = d.querySelector(alert);
  console.log(_alert);
  _input.select();
  _input.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(_input.value);
  if (_input.value) {
    _alert.classList.remove('active');
    setTimeout(() => {
      _alert.classList.add('active');
    }, 2000);
  }
};

export default function password(btn, input, copy, alert) {
  //
  d.addEventListener('click', (e) => {
    if (e.target.matches(btn)) {
      createPassword(input, alert);
    }
    if (e.target.matches(copy)) {
      copyPassword(input, alert);
    }
  });
}
