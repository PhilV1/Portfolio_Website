'use strict';

let intro = document.querySelector('.introLoad');
let logo = document.querySelector('name-header');
let nameSpan = document.querySelectorAll('.myName');

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    nameSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add('active');
      }, (idx + 1) * 400);
    });

    setTimeout(() => {
      nameSpan.forEach(() => {
        setTimeout(() => {
          span.classList.remove('active');
          span.classList.add('fade');
        }, (idx + 1) * 50);
      });
    }, 2000);

    setTimeout(() => {
      intro.style.top = '-100vh';
    }, 2000);
  });
});
