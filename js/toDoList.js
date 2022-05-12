'use strict';

const d = document;
const ls = localStorage;

const list = (_input, _listUl) => {
  let newTask = _input.value;

  let li = d.createElement('li');

  let checkBtn = d.createElement('div');
  let trashBtn = d.createElement('div');
  //
  li.innerText = newTask;
  _listUl.appendChild(li);
  _input.value = '';
  //
  checkBtn.innerHTML = `
    <i class="fas fa-check-square"></i>
  `;
  trashBtn.innerHTML = `
    <i class="fas fa-trash"></i>
  `;
  li.appendChild(checkBtn);
  li.appendChild(trashBtn);

  //
  checkBtn.addEventListener('click', (e) => {
    li.classList.toggle('checked');
    updateLocalStorage();
  });
  trashBtn.addEventListener('click', (e) => {
    li.remove();
    updateLocalStorage();
  });
  updateLocalStorage();
};
//
function updateLocalStorage() {
  const _lis = d.querySelectorAll('li');
  let list = [];
  _lis.forEach((el) => {
    list.push({
      name: el.innerText,
      checked: el.classList.contains('checked'),
    });
  });
  ls.setItem('list', JSON.stringify(list));
}

//
export default function toDoList(form, input, listUl) {
  const _form = d.querySelector(form);
  const _input = d.querySelector(input);
  const _listUl = d.querySelector(listUl);

  //

  _form.addEventListener('submit', (e) => {
    e.preventDefault();
    list(_input, _listUl);
  });
}
