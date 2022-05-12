'use strict';
const d = document;
export default function profile(counter) {
  const _counters = d.querySelectorAll(counter);
  let counterSort = [];
  _counters.forEach((el) => {
    counterSort.push(el.getAttribute('data-ceil'));
    counterSort.sort((a, b) => a - b);
    el.innerText = '0';
    incrementCounter();
    function incrementCounter() {
      let currentNumber = el.innerText;
      let dataCeil = el.getAttribute('data-ceil');
      //console.log(dataCeil);
      let increment = dataCeil / counterSort[0];
      //console.log(increment);
      currentNumber = Math.floor(currentNumber + increment);
      el.innerText = currentNumber;
      if (currentNumber < dataCeil) {
        setTimeout(incrementCounter, 150);
      } else {
        el.innerText = dataCeil;
      }
    }
  });
}
