let menuIcon = document.querySelector('.menu-icon');
let menuPopup = document.querySelector('.menu-popup');


    menuIcon.addEventListener('click', function () {

        menuPopup.classList.toggle('active');



        document.addEventListener('click',function(event){
            if(!menuPopup.contains(event.target)&& !menuIcon.contains(event.target)){
                menuPopup.classList.remove('active');
            }
        
        });
    });



