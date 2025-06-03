
document.addEventListener('DOMContentLoaded', function () {
  const carouselElement = document.querySelector('#banner-carousel');
  const carousel = new bootstrap.Carousel(carouselElement);

  let startX = 0;

  const threshold = 50; // cantidad mínima de movimiento para activar el cambio

  const inner = carouselElement.querySelector('.carousel-inner');

  inner.addEventListener('mousedown', (e) => {
    startX = e.clientX;
  });

  inner.addEventListener('mouseup', (e) => {
    const endX = e.clientX;
    const diffX = startX - endX;

    if (Math.abs(diffX) > threshold) {
      if (diffX > 0) {
        carousel.next();
      } else {
        carousel.prev();
      }
    }
  });
});
