'use strict';
// jQuery
$(function () {
    $('.scroll-down-button a').click(function (event) {
        event.preventDefault();
        let id = $(this).attr('href');
        let top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });
});