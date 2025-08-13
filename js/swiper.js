//Swiper
var swiper = new Swiper(".slide_content", {
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
  
    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      520: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      850: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      1020: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
    },
  });
  
  var swiper = new Swiper(".header_slide_content", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 0,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    autoplay: {
      delay: 10000,
      disableOnInteraction: true,
    },
  });
  
  var swiper = new Swiper(".banner_slide_content", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 0,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });