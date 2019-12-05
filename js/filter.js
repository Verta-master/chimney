//Catalog filter
$('.filter__btn').click(function() {
  $('.filter__main').slideToggle();
});

$('.filter__close').click(function() {
  $('.filter__main').slideUp();
});

$('.filter__down').click(function() {
  $(this).next().slideToggle();
  $(this).parent().toggleClass('filter__item--opened');
});

// Range slider
$(function() {
  $( "#slider-range" ).slider({
    range: true,
    min: 1000,
    max: 25000,
    values: [ 1000, 25000 ],
    slide: function( event, ui ) {
      $( "#amount-min" ).val( "от " + ui.values[ 0 ] + " руб." );
      $( "#amount-max" ).val( "до " + ui.values[ 1 ] + " руб."  );
    }
  });
  $( "#amount-min" ).val( "от " + $( "#slider-range" ).slider( "values", 0 ) + " руб." );
  $( "#amount-max" ).val( "до " + $( "#slider-range" ).slider( "values", 1 ) + " руб." );
});
