let menuIcon = document.querySelector('.menu-icon');
let menuPopup = document.querySelectorAll('.menu-popup');

menuIcon.addEventListener('click',function(){
    if (menuPopup.style.left === '-250px') {
        menuPopup.style.left = '0';
    } 
    else {
        menuPopup.style.left = '-250px';
    }
    
    
})

