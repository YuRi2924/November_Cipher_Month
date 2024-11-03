// const slides = document.querySelectorAll(".slides img");
// let slideIndex = 0;
// let intervalId = null;

// document.addEventListener("DOMContentLoaded", initializeSlider);

// function initializeSlider(){
//     if(slides.length > 0){
//         slides[slideIndex].classList.add("displaySlide");
//         intervalId = setInterval(nextSlide, 5000);    
//     }
// }

// function showSlide(index){  
//     if(index >= slides.length){
//         slideIndex = 0;
//     }
//     else if(index < 0){
//         slideIndex = slides.length - 1;
//     }

//     slides.forEach(slide => {
//         slide.classList.remove("displaySlide");
//     });
//     slides[slideIndex].classList.add("displaySlide");
// }

// function prevSlide(){
//     clearInterval(intervalId)
//     slideIndex--;
//     showSlide(slideIndex);
// }

// function nextSlide(){
//     slideIndex++;
//     showSlide(slideIndex);
// }


// function showSlide(index){
//     if(index >= slides.length){
//         slideIndex = 0;
//     }
//     else if(index < 0){
//         slideIndex = slides.length - 1;
//     }

//     slides.forEach((slide, i) => {
//         slide.classList.remove("displaySlide", "out", "in");
//         slide.style.left = "100%";
//     });

//     slides[slideIndex].classList.add("displaySlide", "in");

//     const prevIndex = (slideIndex - 1 + slides.length) % slides.length;
//     slides[prevIndex].classList.add("out");
// }

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 3000); // Adjust interval as needed
    }
}

function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
        slide.style.left = "100%"; // Reset position off-screen to the right
    });

    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}
