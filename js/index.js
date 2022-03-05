const swiper = new Swiper('.swiper', {
    // Optional paramete
    slideToClickedSlide: true,
    loop: true,
    autoHesught: true,
    // loopedSlides: 3,
    slidesPerView: 1.999999,
    centeredSlides: true,
    initialSlide: 1,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    }
  });