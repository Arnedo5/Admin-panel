//Lateral Menu
var open = true;

$("#menu").click(function () {
    if (open) {
        $('header, main, footer').animate({
            marginLeft: '0px'
        }, 500);

        $('#slide-out').animate({
            marginLeft: '-300px'
        }, 500);
        open = false;
    } else {
        $('header, main, footer').animate({
            marginLeft: '300px'
        }, 500);

        $('#slide-out').animate({
            marginLeft: '0px'
        }, 500);
        open = true;
    }
});

$('.message a, .continue').click(function () {
    $('.transform').animate({
        height: "toggle",
        opacity: "toggle"
    }, "slow");
});