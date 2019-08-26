
$("#projects").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#robo").offset().top
    }, 1000);
});


$("#selfintro").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#introstart").offset().top
    }, 1000);
});


$("#homebut").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#homefoto").offset().top
    }, 1000);
});
