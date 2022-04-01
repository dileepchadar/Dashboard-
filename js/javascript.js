// const sidebar = document.querySelector('#sidebar');
// // sidebar.classList.add('sidebar-1')
// // console.log(sidebar);
// const sidebarbutton = document.querySelector('.side-bar-btn');
// console.log('sidebarbutton');





const button =document.querySelector('.side-bar-btn');
const heading =document.querySelector('#sidebar');
const mainpage =document.querySelector('.main-page');
const body =document.querySelector('.body');
const themebtn =document.querySelector('.theme-btn');

button.addEventListener('click', () => {
    heading.classList.toggle('sidebar-1');
    mainpage.classList.toggle('main-page-js');
});
themebtn.addEventListener('click', () => {
    body.classList.toggle('theme-changer');

});











