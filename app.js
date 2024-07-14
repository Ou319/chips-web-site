let active_menu=document.getElementById("active-menu");
let close_menu=document.getElementById("close-menu");
let my_nav = document.querySelector(".my-nav");
active_menu.addEventListener("click",()=>{
    my_nav.classList.add("active");
})
close_menu.addEventListener("click",()=>{
    my_nav.classList.remove("active");
})


// about nav bar

let scrool1 =window.pageYOffset;
window.onscroll=function(){
    let scrool2=window.pageYOffset;
    if(scrool1 > scrool2){
        // document.querySelector('header').style.top="0";
        document.querySelector('header').classList.remove("active")
    }
    else{
        // document.querySelector('header').style.top="-100px";
        document.querySelector('header').classList.add("active")
    }
    scrool1=scrool2;
}   


function setZoomLevel(zoomLevel) {
    document.body.style.zoom = zoomLevel;
}

// Set the zoom level to 80%
setZoomLevel('80%');

// about slider 
let currentSlide = 0;
let slideInterval;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

function startSlideShow() {
    slideInterval = setInterval(() => {
        changeSlide(1);
    }, 30000000000000000);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
    startSlideShow();
});



// animate alement using js here
document.addEventListener('DOMContentLoaded', function () {
    const observerOptions = {
        threshold: 0.1 // Trigger when 10% of the element is active
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                entry.target.classList.remove('hidden');
            } else {
                entry.target.classList.remove('active');
                entry.target.classList.add('hidden');
            }
        });
    }, observerOptions);
  
    const hiddenElements = document.querySelectorAll('.my-img');
    const imgelement = document.querySelectorAll('.imp-img');
    const content = document.querySelectorAll('.content');
    hiddenElements.forEach(el => observer.observe(el));
    imgelement.forEach(el => observer.observe(el));
    content.forEach(el => observer.observe(el));
  });