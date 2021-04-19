$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    })
})

window.onscroll = function showHeader() {
    var header = document.querySelector('.header');
    if (window.pageYOffset > 1) {
        header.classList.add('header_active');
    } else {
        header.classList.remove('header_active');
    }
}