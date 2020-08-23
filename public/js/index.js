const mobile_menu_open = document.querySelector('#show_mobile_menu');
const mobile_menu_close = document.querySelector('#close_mobile_menu');
const mobile_menu = document.querySelector('#mobile_menu');

mobile_menu_open.addEventListener('click', () => {
  mobile_menu.style.display = 'flex';
});

mobile_menu_close.addEventListener('click', () => {
  mobile_menu.style.display = 'none';
});
