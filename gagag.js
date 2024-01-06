$(document).ready(function() {
    $('.scroll-back-icon').click(function() {
        $('.grey-box').toggle();
        if (!$('.grey-box').is(':visible')) {
            $('.grey-inner-box').css('margin-bottom', '10px');
        } else {
            $('.grey-inner-box').css('margin-bottom', '0');
        }
    });
});