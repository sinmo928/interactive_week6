$(document).ready(function () {

    var windowwidth = $(window).width()
    var mouseX = 0;

    $(document).mousemove(function (e) {
        mouseX = e.pageX;
        if (mouseX < windowwidth / 2) {
            $('.box').css('background-color', 'red')
        }
        if (mouseX > windowwidth / 2) {
            $('.box').css('background-color', 'blue')
        }
    })

})