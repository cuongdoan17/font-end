$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    margin: 10,
    nav: false,
    dots: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: false
      }
    }
  });
});