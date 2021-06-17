const nav_btn=document.querySelector('.nav_button');
const menu=document.querySelector('.menu');

nav_btn.addEventListener('click',()=>{
    menu.classList.toggle('active');
});
