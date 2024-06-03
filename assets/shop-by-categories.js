document.addEventListener('DOMContentLoaded', (event) => {
  var swiper = new Swiper('.feature-collection-slider', {
    slidesPerView: 'auto',
    spaceBetween: 17,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});
