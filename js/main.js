// Menu
$(".nav-toggle").click(function(){
    $(this).toggleClass('open');
    $('body').toggleClass('menu-open');
    $("nav ul").slideToggle(600, function() {

    });
});
