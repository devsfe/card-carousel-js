var slidePosition = 0;
var btnPrev = document.getElementById('carousel__btn--prev');
var btnNext = document.getElementById('carousel__btn--next');
const slides = document.getElementsByClassName('card');
const totalSlides = slides.length;
const dots = document.getElementsByClassName('dot');
var dot1 = document.getElementById('dot-1');
var dot2 = document.getElementById('dot-2');
var dot3 = document.getElementById('dot-3');

//Eventos
btnNext.addEventListener('click', moveNextSlide);
btnPrev.addEventListener('click', movePrevSlide);
dot1.addEventListener('click', mostrarPrimeiraImagem);
dot2.addEventListener('click', mostrarSegundaImagem);
dot3.addEventListener('click', mostrarTerceiraImagem);


//Atualizar posição do Slide
function updateSlidePosition() {
    for (var slide of slides) {
        slide.classList.remove('card--visible');
        slide.classList.add('card--hidden');
    } 

    slides[slidePosition].classList.add('card--visible');        
}


//Atualizar posição dos pontos
function updateDot() {
    for (var dot of dots) {
        dot.classList.remove('dot-active');
    }

    dots[slidePosition].classList.add('dot-active');
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


// Mostrar imagem ao clicar nos pontos

function mostrarPrimeiraImagem() {
    if (slidePosition !== 0) {
        slidePosition = 0; 
    }

    updateDot();
    updateSlidePosition();
}

function mostrarSegundaImagem() {
    if (slidePosition !== 1) {
        slidePosition = 1; 
    }

    updateDot();
    updateSlidePosition();
}

function mostrarTerceiraImagem() {
    if (slidePosition !== 2) {
        slidePosition = 2; 
    }

    updateDot();
    updateSlidePosition();
}





