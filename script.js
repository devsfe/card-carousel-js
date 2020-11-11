var slidePosition = 0;
var btnPrev = document.getElementById('carousel__btn--prev');
var btnNext = document.getElementById('carousel__btn--next');
const slides = document.getElementsByClassName('card');
const totalSlides = slides.length;
const dot = document.getElementsByClassName('dot');

//Eventos
btnNext.addEventListener('click', moveNextSlide);
btnPrev.addEventListener('click', movePrevSlide);


//Atualizar posição do Slide
function updateSlidePosition() {
    for (var slide of slides) {
        slide.classList.remove('card--visible');
        slide.classList.add('card--hidden');
    } 

    slides[slidePosition].classList.add('card--visible');        
}


//Atualizar função dos pontos
function updateDot() {
    for (var ponto of dot) {
        ponto.classList.remove('dot-active');
    }

    dot[slidePosition].classList.add('dot-active');
}


// Mover ao próximo Slide
function moveNextSlide() { 
    if (slidePosition == totalSlides -1) { 
        slidePosition = 0; 
    } else {
        slidePosition ++;
    }

    updateDot();
    updateSlidePosition();
    
}

// Mover ao Slide anterior
function movePrevSlide() {     
    if (slidePosition == 0) { 
        slidePosition = totalSlides -1  ; 
    } else {
        slidePosition --;
    }

    updateDot();
    updateSlidePosition();
}





