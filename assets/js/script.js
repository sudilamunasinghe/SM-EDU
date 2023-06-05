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