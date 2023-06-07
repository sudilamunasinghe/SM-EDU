// Responsive Navigation Bar
$(".nav-bar-icon").click(function(){
    $(".mobile-nav").css({
        display: 'block',
        right: '0'
    })
    $(this).css({
        display: 'none',
    })
    $(".nav-close-icon").css({
        visibility: 'visible',
        left: '20px',
    })
})
$(".nav-close-icon").click(function(){
    $(".mobile-nav").css({
        display: 'none',
        right: '-200px',
    })
    $(this).css({
        visibility: 'hidden',
    })
    $(".nav-bar-icon").css({
        display: 'block',
    })
})


// Home Slider
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});


// Number Count Animation----------------------//
function inVisible(element) {
  //Checking if the element is
  //visible in the viewport
  var WindowTop = $(window).scrollTop();
  var WindowBottom = WindowTop + $(window).height();
  var ElementTop = element.offset().top;
  var ElementBottom = ElementTop + element.height();
  //animating the element if it is
  //visible in the viewport
  if ((ElementBottom <= WindowBottom) && ElementTop >= WindowTop)
  animate(element);
  }
  function animate(element) {
  //Animating the element if not animated before
  if (!element.hasClass('ms-animated')) {
  var maxval = element.data('max');
  var html = element.html();
  element.addClass("ms-animated");
  $({
  countNum: element.html()
  }).animate({
  countNum: maxval
  }, {
  //duration 5 seconds
  duration: 2000,
  easing: 'linear',
  step: function() {
  element.html(Math.floor(this.countNum) + html);
  },
  complete: function() {
  element.html(this.countNum + html);
  }
  });
  }
  }
  //When the document is ready
  $(function() {
  //This is triggered when the
  //user scrolls the page
  $(window).scroll(function() {
  //Checking if each items to animate are
  //visible in the viewport
  $("h2[data-max]").each(function() {
  inVisible($(this));
  });
  })
  });



