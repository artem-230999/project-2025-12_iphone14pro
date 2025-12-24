const burgerBtn = document.querySelector('.burger');
const closeBtn = document.querySelector('.close');
const menu = document.querySelector('.nav__list');

burgerBtn.addEventListener('click', function () {
  menu.classList.add('mobile-menu');
});

closeBtn.addEventListener('click', function () {
  menu.classList.remove('mobile-menu');
});
