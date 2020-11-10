var slidePosition = 0;
var btnPrev = document.getElementById('carousel__btn--prev');
var btnNext = document.getElementById('carousel__btn--next');
const slides = document.getElementsByClassName('card');
const totalSlides = slides.length;

//Eventos
btnNext.addEventListener('click', moveNextSlide);
btnPrev.addEventListener('click', movePrevSlide);


function updateSlidePosition() {
    for (var slide of slides) {
        slide.classList.remove('card--visible');
        slide.classList.add('card--hidden');
    } 

    slides[slidePosition].classList.add('card--visible');    
}



// Mover ao próximo Slide
function moveNextSlide() { 
    if (slidePosition == totalSlides -1) { 
        slidePosition = 0; 
    } else {
        slidePosition ++;
    }

    updateSlidePosition();
}

// Mover ao Slide anterior
function movePrevSlide() {     
    if (slidePosition == 0) { 
        slidePosition = totalSlides -1  ; 
    } else {
        slidePosition --;
    }

    updateSlidePosition();

}





