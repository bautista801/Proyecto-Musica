// boton sidebar
$(".btn").click(function(){
    $(this).toggleClass("click")
    $(".sidebar").toggleClass("show")
})

// boton lofi
$(".lofi-btn").click(function(){
    $("nav ul .lofi-show").toggleClass("show");
    $("nav ul .first").toggleClass("rotate");
});

// boton dubstep
$(".dubstep-btn").click(function(){
    $("nav ul .dubstep-show").toggleClass("show");
    $("nav ul .second").toggleClass("rotate");
});

//boton electronica
$(".electronica-btn").click(function(){
    $("nav ul .electronica-show").toggleClass("show");
    $("nav ul .third").toggleClass("rotate");
});

// boton trap
$(".trap-btn").click(function(){
    $("nav ul .trap-show").toggleClass("show");
    $("nav ul .fourth").toggleClass("rotate");
});

// boton rap
$(".rap-btn").click(function(){
    $("nav ul .rap-show").toggleClass("show");
    $("nav ul .fifth").toggleClass("rotate");
});

// boton rock
$(".rock-btn").click(function(){
    $("nav ul .rock-show").toggleClass("show");
    $("nav ul .sixth").toggleClass("rotate");
});

// color elementos
$("nav ul li").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
});