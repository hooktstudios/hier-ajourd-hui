$(document).ready(function() {
  var $itemsWrap = $('.items');
  var $items = $itemsWrap.find('.item');
  var $slider = $('.slider');
  var $sliderNavItem = $('.slider__nav-item');

  var SLIDER_NAV_STEPS = 100;
  var SLIDER_MAX = $slider.attr('max');

  console.log(SLIDER_MAX)

  $itemsWrap.width($items.length * 100 + 'vw');

  // Preload images?
  // $items.each(function(i, el) {
  //   new Image().src = $(el).css('background-image').replace(/url\(\"|\"\)/g, '');
  // });

  $slider.on('input', function() {
    $itemsWrap.css('left', this.value * -1 + 'vw');
  });

  $sliderNavItem.on('click', function(e) {
    var currentValue = parseInt($slider.val(), 10);
    var direction = $(this).data('direction');
    var destination;

    if(direction == 'prev') {
      destination = Math.floor(currentValue / 100) * 100;

      if(destination == currentValue) {
        destination = destination - 100;
      }

      destination = Math.max(destination, 0);
    }
    else {
      destination = Math.ceil(currentValue / 100) * 100;

      if(destination == currentValue) {
        destination = destination + 100;
      }

      destination = Math.min(destination, SLIDER_MAX);
    }

    $slider
      .val(destination)
      .trigger('input');
  });
})
