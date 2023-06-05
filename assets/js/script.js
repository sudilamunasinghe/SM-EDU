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