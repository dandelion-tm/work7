'use strict';

$(function() {
    // ハンバーガーメニュー開閉
    $('.header__toggle').on('click', function() {
        $(this).toggleClass('active');
        $('.header__menu').toggleClass('open');
    });
    // メニューのリストをクリックしたらハンバーガーメニュー閉じる
    $('.header__list-item').on('click', function() {
        $('.header__menu').toggleClass('open');
        $('.header__toggle').toggleClass('active');
    })

    const imgHeight = $('.fv__wrapper').outerHeight();
    const header = $('.header__nav');
    $(window).on('load scroll', function() {
        if ($(window).scrollTop() < imgHeight) {
            header.removeClass('headerColor');
        } else {
            header.addClass('headerColor');
        }
    });
});