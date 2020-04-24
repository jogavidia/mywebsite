$(function() {
    $('.flexslider').flexslider({
      animation: "fade"
    });

    $('.owl-theme').owlCarousel({
      margin:15,
      autoplay:true,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              nav:true
          },
          480:{
              items:2,
              nav:false
          },
          600:{
              items:3,
              nav:true,
              loop:false
          },
          769:{
              items:4,
              nav:true,
              loop:false
          }
      }
      })


  });