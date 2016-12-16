/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */
// Equal Height function
$.fn.equialHeight = function() {
  var $tallestcolumn = 0;
  var $currentHeight = 0;
  $.each($(this), function (index, value) {
    $currentHeight = $(this).height();
    if($currentHeight > $tallestcolumn)
    {
      $tallestcolumn = $currentHeight;
    }
  });
  $(this).height($tallestcolumn);
  return $(this);
} 

$(window).on('resize', function(){
  if( $( window ).width() >= 320 ) {
    $('.filter__box').equialHeight();
  }
}).trigger('resize');

$(window).on('resize', function(){
  if( $( window ).width() >= 768 ) {
  }
}).trigger('resize');


var $carousel = $('.filter__slider').slick({
  autoplay : true,
  autoplaySpeed : 3000,
  slidesToShow : 0,
  slidesToScroll : 1,
  infinite: true,
  responsive : [
    { breakpoint: 767,  settings: {slidesToShow: 2} }
  ]
});
$('[data-filter]').on('click', function(e) {
  var filterName = $(this).data('filter')

  if (filterName != 'all') {
    $carousel.slick('slickUnfilter');
    $carousel.slick('slickFilter', filterName);
  } else {
    $carousel.slick('slickUnfilter');
  }
});

$('.filter__btn').on('click', function(e) {
  var activeClass = 'filter__btn--active';

  $(this).addClass(activeClass)
         .siblings()
         .removeClass(activeClass);
});

$(function() {
  $('.filter__control').on('click', function(){
    var activeClass = 'filter__control--active';

    $('.filter__control').removeClass(activeClass);
    $(this).addClass(activeClass);
    
    $('.filter__dropdown').text($(this).text());
  });
  
});
