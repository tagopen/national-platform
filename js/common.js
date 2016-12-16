 $(document).ready(function(){
 	$('.tabs-menu a').on('click', function(e) {
    e.preventDefault();
    var $item = $(this).closest('.tabs-item'),
        itemPosition = $(this).attr('href'),
        $contentItem = $('.tab-content');

    $contentItem.filter(itemPosition)
        .add($item)
        .addClass('current')
        .siblings()
        .removeClass('current');
  });

 	$('.partners-list').owlCarousel({
 		loop: true,
 		items: 3,
 		autoplay: false,
 		autoplayTimeout: 3000,
 		autoplayHoverPause: true,
 		dotsSpeed: 600,
 		dotsContainer: '',
 		nav: true,
 		responsive: {
      1200:{
        items: 3,
      },
      992:{
        items: 3,
      },
      768: {
        items: 3,
      },
      649: {
        items: 1,
      },
      480: {
        items: 1,
      },
      460: {
        items: 1,
      },
      0: {
        items: 1,
      }
    }


 	});
    $('.slider1').owlCarousel({
        loop: true,
        items: 4,
        autoplay: false,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        dotsSpeed: 600,
        dotsContainer: '',
        nav: true,
        responsive: {
      1200:{
        items: 4,
      },
      992:{
        items: 4,
      },
      768: {
        items: 4,
      },
      649: {
        items: 2,
      },
      480: {
        items: 2,
      },
      460: {
        items: 2,
      },
      0: {
        items: 2,
      }
    }


    });
    $('.slider2').owlCarousel({
        loop: true,
        items: 4,
        autoplay: false,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        dotsSpeed: 600,
        dotsContainer: '',
        nav: true,
        responsive: {
      1200:{
        items: 4,
      },
      992:{
        items: 4,
      },
      768: {
        items: 4,
      },
      649: {
        items: 2,
      },
      480: {
        items: 2,
      },
      460: {
        items: 2,
      },
      0: {
        items: 2,
      }
    }


    });
$('.slider3').owlCarousel({
        loop: true,
        items: 4,
        autoplay: false,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        dotsSpeed: 600,
        dotsContainer: '',
        nav: true,
        responsive: {
      1200:{
        items: 4,
      },
      992:{
        items: 4,
      },
      768: {
        items: 4,
      },
      649: {
        items: 2,
      },
      480: {
        items: 2,
      },
      460: {
        items: 2,
      },
      0: {
        items: 2,
      }
    }


    });
$('.slider4').owlCarousel({
        loop: true,
        items: 4,
        autoplay: false,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        dotsSpeed: 600,
        dotsContainer: '',
        nav: true,
        responsive: {
      1200:{
        items: 4,
      },
      992:{
        items: 4,
      },
      768: {
        items: 4,
      },
      649: {
        items: 2,
      },
      480: {
        items: 2,
      },
      460: {
        items: 2,
      },
      0: {
        items: 2,
      }
    }


    });
$('.slider5').owlCarousel({
        loop: true,
        items: 4,
        autoplay: false,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        dotsSpeed: 600,
        dotsContainer: '',
        nav: true,
        responsive: {
      1200:{
        items: 4,
      },
      992:{
        items: 4,
      },
      768: {
        items: 4,
      },
      649: {
        items: 2,
      },
      480: {
        items: 2,
      },
      460: {
        items: 2,
      },
      0: {
        items: 2,
      }
    }


    });
$('.slider6').owlCarousel({
        loop: true,
        items: 4,
        autoplay: false,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        dotsSpeed: 600,
        dotsContainer: '',
        nav: true,
        responsive: {
      1200:{
        items: 4,
      },
      992:{
        items: 4,
      },
      768: {
        items: 4,
      },
      649: {
        items: 2,
      },
      480: {
        items: 2,
      },
      460: {
        items: 2,
      },
      0: {
        items: 2,
      }
    }


    });
$('.slider7').owlCarousel({
        loop: true,
        items: 4,
        autoplay: false,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        dotsSpeed: 600,
        dotsContainer: '',
        nav: true,
        responsive: {
      1200:{
        items: 4,
      },
      992:{
        items: 4,
      },
      768: {
        items: 4,
      },
      649: {
        items: 2,
      },
      480: {
        items: 2,
      },
      460: {
        items: 2,
      },
      0: {
        items: 2,
      }
    }


    });
 	$('.slider-rev').owlCarousel({
 		loop: true,
 		items: 1,
 		autoplay: false,
 		autoplayTimeout: 3000,
 		autoplayHoverPause: true,
 		dotsSpeed: 600,
 		dotsContainer: '',
 		nav: true


 	});
 	$(window).scroll(function () {
 		if ($(this).scrollTop() > 590) {
 			$('.btn-menu').css('display', 'block');

 		} else {
 			$('.btn-menu').css('display', 'none');


 		}
 	});
 	$(".togle-menu").hide();
    
 	$(".btn-menu").click(function () {

    // Set the effect type
    var effect = 'slide';

    // Set the options for the effect type chosen
    

    // Set the duration (default: 400 milliseconds)
    var duration = 500;

    $('.togle-menu').toggle(effect, duration);
    return false;
});
 	});

/*$('.slide-tab2').slick({
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  arrows: false
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  
});*/

/*$('.slide-tab2').slick({
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 0,
  dots: false,
  rows: 2,
  slidesPerRow:2,
  arrows: false,
  infinite: true,

  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        rows: 1,
        slidesPerRow:0
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});*/

$(document).ready(function () {
    var options = {
        navigation: true,
        pagination: true
    };
    $("#owl-demo").owlCarousel(options);
    function showProjectsbyCat(cat) {

        var owl = $("#owl-demo").data('owlCarousel');

        owl.addItem('<div/>', 0);
        
        var nb = owl.itemsAmount;
        for (var i = 0; i < (nb - 1); i++) {
            owl.removeItem(1);
        }
        
        if (cat == 'all') {
            $('#projects-copy .project').each(function () {
                owl.addItem($(this).clone());
            });
        } else {
            $('#projects-copy .project.' + cat).each(function () {
                owl.addItem($(this).clone());
            });
        }
        owl.removeItem(0);
    }
    $('#owl-demo .project').clone().appendTo($('#projects-copy'));
    $('#project-terms a').click(function (e) {
        e.preventDefault();
        $('#project-terms a').removeClass('active');

        cat = $(this).attr('ID');
        $(this).addClass('active');
        showProjectsbyCat(cat);
    });
});

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
  arrows: false,
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

$(document).ready(function() {  
  $("#bs3-carousel-l, #bs3-carousel-2").swiperight(function() {  
    $(this).carousel('prev');  
  });  
  $("#bs3-carousel-l, #bs3-carousel-2").swipeleft(function() {  
    $(this).carousel('next');  
  });  
});  