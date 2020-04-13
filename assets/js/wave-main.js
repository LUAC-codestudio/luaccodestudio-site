$(document).ready(function() {
    $(".gameText").hide();
    $('.gameTitle').hide();
    $('#store').hide();
    timeout();



    $(window).scroll(function() {
        if ($(this).scrollTop() > 10) {
            $('header').css("background-color", "rgba(34,123,165,.8)");
        } else {
            $('header').css("background-color", "rgba(255,255,255,0)");
        }
    });
});


var time = 0;

function timeout() {
    setTimeout(function() {
        if (time === 0) {
            $("#textInfo").text("Rocket League new content!");
            $("#textInfo").addClass("animated slideInDown");
            time++;
        } else
        if (time === 1) {
            $("#textInfo").text("Outlast 2 Demo Downloaded");
            $("#textInfo").addClass("animated slideInDown");
            time++;
        } else
        if (time === 2) {
            $("#textInfo").text("Overwatch Update V 1.2.3");
            $("#textInfo").addClass("animated slideInDown");
            time = 0;
        }
        setTimeout(function() {
            $("#textInfo").removeClass("animated slideInDown");
        }, 1000);
        timeout();
    }, 4000);
}

$(".squareGame").hover(
    function() {
        $(this).find('.gameText').show();
        $(this).find('.gameTitle').show();
        $(this).find('#store').show();
    },
    function() {
        $(this).find('.gameText').hide();
        $(this).find('.gameTitle').hide();
        $(this).find('#store').hide();
    }
);


window.setInterval(init, 2000);