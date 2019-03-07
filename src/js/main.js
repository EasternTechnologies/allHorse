$(document).ready(function() {
  svg4everybody({});

  // Mobile menu
  var toggle = $('.menu__toggle');
  var menu = $('.menu');
  var body = $('body');

  toggle.on('click', function() {
    menu.toggleClass('active');
  })

  // Slider
  $('.slider-single').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    asNavFor: '.slider-nav'
  });

  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-single',
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    responsive: [{
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ],
  });
});
