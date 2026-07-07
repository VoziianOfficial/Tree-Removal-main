document.addEventListener("DOMContentLoaded", function () {
  if (window.Oakline) {
    window.Oakline.createFAQSchema("#home-faq .accordion-item");
  }

  if (typeof Swiper !== "undefined" && document.querySelector(".oakline-testimonials-swiper")) {
    new Swiper(".oakline-testimonials-swiper", {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      speed: 700,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      pagination: {
        el: ".oakline-testimonials-pagination",
        clickable: true
      }
    });
  }
});