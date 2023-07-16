//   Mobile menu

const menuMobile = document.getElementById('nav-bar-mobile');
const btnMenu = document.getElementById('btn-menu');
const modalForm = document.getElementById('window-modal-form');
const modalShedule = document.getElementById('schedule-window-modal');


menuMobile.addEventListener(' click', animateMenu);

function animateMenu(){
    
    menuMobile.classList.toggle('mobileMenu');
    btnMenu.classList.toggle('activeBtn');
    
}

// modal form

function openForm(){
    modalForm.classList.add('opened')
    
    modalForm.addEventListener("click",(e) => {
        if (e.target.classList == 'close-btn'|| e.target.id == 'window-modal-form'){
           modalForm.classList.remove('opened') 
        }
    })

}

//modal schedule

function openSchedule(){
    
    modalShedule.classList.add('opened')

    modalShedule.addEventListener("click",(e) => {
        if (e.target.classList == 'close-btn' || e.target.id == 'schedule-window-modal'){
            modalShedule.classList.remove('opened')
        }  
    })




}




// SLIDER 
let radio = document.querySelector('.manual-btn');
let count = 1

document.getElementById('radio1').checked = true;

setInterval(()=> {
    nextImg()
}, 5000)

function nextImg(){
    count++

    if (count > 3){
        count = 1
    }

    document.getElementById('radio'+count).checked = true;
}


