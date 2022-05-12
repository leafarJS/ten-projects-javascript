'use strict';
const d = document;
let currentChecked = 1;

const updateStepProgress = (_steps, _progress) => {
  const checkedNumber = d.querySelectorAll('.checked');
  const _prev = d.getElementById('prev-progress-bar');
  const _next = d.getElementById('next-progress-bar');
  _steps.forEach((el, index) => {
    if (index < currentChecked) {
      el.classList.add('checked');
      el.innerHTML = `
       <i class="fas fa-check"></i>
        <small>${
          index === 0
            ? 'Start'
            : index === _steps.length - 1
            ? 'Final'
            : 'Step' + index
        }</small>
    `;
    } else {
      el.classList.remove('checked');
      el.innerHTML = `
      <i class="fas fa-times"></i>
      `;
    }
    _progress.style.width =
      ((checkedNumber.length - 1) / (_steps.length - 1)) * 100 + '%';
    if (currentChecked === 1) {
      _prev.disabled = true;
    } else if (currentChecked === _steps.length) {
      _next.disabled = true;
    } else {
      _prev.disabled = false;
      _next.disabled = false;
    }
  });
};

export default function progressBar(step, progress) {
  const _steps = d.querySelectorAll(step);
  const _progress = d.querySelector(progress);

  d.addEventListener('click', (e) => {
    if (e.target.matches('.fa-arrow-right')) {
      currentChecked++;
      if (currentChecked > _steps.length) {
        currentChecked = _steps.length;
      }
    }
    updateStepProgress(_steps, _progress);
  });

  d.addEventListener('click', (e) => {
    if (e.target.matches('.fa-arrow-left')) {
      currentChecked--;
      if (currentChecked < 1) {
        currentChecked = 1;
      }
    }
    updateStepProgress(_steps, _progress);
  });
}

//
