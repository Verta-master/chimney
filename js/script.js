//Mobile menu
$('.menu__btn').click(function() {
  $('.menu').toggleClass('menu--opened');
  $('.header').toggleClass('header--menu');
  $('.menu__drop').slideToggle();
});
