$(document).ready(function(){
    $('.my-class').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              arrows: false,
              slidesToShow: 5
            },
            breakpoint: 768,
            settings: {
              arrows: false,
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              slidesToShow: 1
            }
          }
        ]
      });
                      
});