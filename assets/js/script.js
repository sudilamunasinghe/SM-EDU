// Responsive Navigation Bar
$(".nav-bar-icon").click(function(){
    $(".mobile-nav").css({
        display : 'block',
    })
    $(this).css({
        visibility: 'hidden',
    })
    $(".nav-close-icon").css({
        visibility: 'visible',
        left: '20px',
    })
})
$(".nav-close-icon").click(function(){
    $(".mobile-nav").css({
        display : 'none',
    })
    $(this).css({
        visibility: 'hidden',
    })
    $(".nav-bar-icon").css({
        visibility: 'visible',
    })
})