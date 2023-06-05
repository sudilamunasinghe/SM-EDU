// Responsive Navigation Bar
$(".nav-bar-icon").click(function(){
    $(".mobile-nav").css({
        visibility: 'visible',
        right: '0',
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
        visibility: 'hidden',
        right: '-200px',
    })
    $(this).css({
        visibility: 'hidden',
    })
    $(".nav-bar-icon").css({
        visibility: 'visible',
    })
})