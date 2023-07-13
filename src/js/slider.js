// let slideIndex = 1;
// showSlides(slideIndex);

// function nextSlide() {
//     showSlides(slideIndex += 1);
// }

// function previousSlide() {
//     showSlides(slideIndex -= 1);
// }

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("reviews-card");
    
//     if (n > slides.length) {
//       slideIndex = 1
//     }
//     if (n < 1) {
//         slideIndex = slides.length
//     }
  
//     for (let slide of slides) {
//         slide.style.display = "none";
//     }
//     slides[slideIndex - 1].style.display = "block";
// }

var swiper = new Swiper(".reviews-slider", {
    slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });