$('.card__option').click(function() {
  $(this).next().slideToggle();
  $(this).toggleClass('card__option--opened');
});

$('.card__suboption').click(function() {
  $(this).next().slideToggle();
  $(this).toggleClass('card__suboption--opened');
});
