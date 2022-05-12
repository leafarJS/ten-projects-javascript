'use strict';
import toDoList from './toDoList.js';
import loadingPage from './loadingPage.js';
import selectorSocialMedia from './selector.js';
import search from './search.js';
import password from './password.js';
import countdown from './countdown.js';
import gallery from './gallery.js';
import profile from './profile.js';
import emoji from './emoji.js';
import progressBar from './progressBar.js';

const d = document;
const w = window;

d.addEventListener('DOMContentLoaded', (e) => {
  progressBar('.step', '.progress-bar-front');
  toDoList('.form', '.input-toDoList', '.list-toDoList', 'li');
  loadingPage('.double-landing-page-container', '.left', '.right');
  selectorSocialMedia('.social-lists', '.fas', '.social-lists li', '.menu p');
  search('.search-bar-container', '.magnifier');
  password('.btn-password', '.input', '.fa-copy', '.alert-container');
  countdown('day', 'hour', 'minute', 'second');
  gallery('.image-container');
  profile('.profile-counter');
  emoji('.fa-star', '.far');
});
