'use strict';
const d = document;

export default function countdown(day, hour, minute, second) {
  const _day = d.getElementById(day);
  const _hour = d.getElementById(hour);
  const _minute = d.getElementById(minute);
  const _second = d.getElementById(second);
  const newYearDate = new Date('Dec 31, 2022 00:00:00').getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const gap = newYearDate - now;
    //
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    //
    const days = Math.floor(gap / day);
    const hours = Math.floor((gap % day) / hour);
    const minutes = Math.floor((gap % hour) / minute);
    const seconds = Math.floor((gap % minute) / second);
    //
    _day.innerText = days;
    _hour.innerText = hours;
    _minute.innerText = minutes;
    _second.innerText = seconds;
    //
    setTimeout(updateCountdown, 1000);
  }
  updateCountdown();
}
