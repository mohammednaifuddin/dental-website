/* =========================
HERO SLIDER
========================= */

const slides =
document.querySelectorAll(".hero .slide");

let currentSlide = 0;

function showSlide(index){

slides.forEach(slide => {
slide.classList.remove("active");
});

slides[index].classList.add("active");

}

function nextSlide(){

currentSlide++;

if(currentSlide >= slides.length){
currentSlide = 0;
}

showSlide(currentSlide);

}

setInterval(nextSlide, 4000);

/* =========================
REVIEW SLIDER
========================= */

const reviews =
document.querySelectorAll(".review");

let currentReview = 0;

function showReview(index){

reviews.forEach(review => {
review.classList.remove("active");
});

reviews[index].classList.add("active");

}

function nextReview(){

currentReview++;

if(currentReview >= reviews.length){
currentReview = 0;
}

showReview(currentReview);

}

setInterval(nextReview, 5000);
