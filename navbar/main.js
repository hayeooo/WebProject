const nav_btn=document.querySelector('.nav_button');
const menu=document.querySelector('.nav_menus');
const icons=document.querySelector('.nav_icons');

nav_btn.addEventListener('click',()=>{
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});
