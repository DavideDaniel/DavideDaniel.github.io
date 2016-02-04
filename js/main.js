// SCROLLING //
'use strict';
$(function () {

  // using jQuery Easing plugin here
  $('a.page-scroll')
    .bind('click', function (event) {
      var $anchor = $(this);
      $('html, body')
        .stop()
        .animate({
          scrollTop: ($($anchor.attr('href'))
            .offset()
            .top)
        }, 1000, 'easeOutExpo');
      event.preventDefault();
    });

  // highlighting nav while scrolling through sections
  $('body')
    .scrollspy({
      target: '.navbar-fixed-top',
      offset: 51
    });

  // Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a')
    .click(function () {
      $('.navbar-toggle:visible')
        .click();
    });

  // Offset for Main Navigation
  $('#mainNav')
    .affix({
      offset: {
        top: 100
      }
    });

  // scroll listener for the D3 graph rendering

  // scroll listener for button to go up top
  $(window)
    .scroll(function () {
      if ($(this)
        .scrollTop() > 400) {
        $('#backTop')
          .fadeIn();
      } else {
        $('#backTop')
          .fadeOut();
      }
    });

});

// PARALLAX //
if ('ontouchstart' in window) { // detect touch
  document.documentElement.className = document.documentElement.className +
    'touch';
}
if (!$('html')
  .hasClass('touch')) {

  // background fix
  $('.parallax')
    .css('background-attachment', 'fixed');
}

// function to fix vertical when not overflow if .fullscreen content changes
function fullscreenFix() {
  var h = $('body')
    .height();

  // set .fullscreen height
  $('.content-b')
    .each(function (i) {
      if ($(this)
        .innerHeight() <= h) {
        $(this)
          .closest('.fullscreen')
          .addClass('not-overflow');
      }
    });
}

$(window)
  .resize(fullscreenFix);
fullscreenFix();

function backgroundResize() { // resize background images
  var windowH = $(window)
    .height();
  $('.background')
    .each(function (i) {
      var path = $(this);

      // variables
      var contW = path.width();
      var contH = path.height();
      var imgW = path.attr('data-img-width');
      var imgH = path.attr('data-img-height');
      var ratio = imgW / imgH;

      // overflowing difference
      var diff = parseFloat(path.attr('data-diff'));
      diff = diff ? diff : 0;

      // remaining height to have fullscreen image only on parallax
      var remainingH = 0;
      if (path.hasClass('parallax') && !$('html')
        .hasClass('touch')) {
        var maxH = contH > windowH ? contH : windowH;
        remainingH = windowH - contH;
      }

      // set img values depending on cont
      imgH = contH + remainingH + diff;
      imgW = imgH * ratio;

      // fix when too large
      if (contW > imgW) {
        imgW = contW;
        imgH = imgW / ratio;
      }

      path.data('resized-imgW', imgW);
      path.data('resized-imgH', imgH);
      path.css('background-size', imgW + 'px' + imgH + 'px');
    });
}

$(window)
  .resize(backgroundResize);
$(window)
  .focus(backgroundResize);
backgroundResize();

// function to set parallax background-position
function parallaxPosition(e) {
  var heightWindow = $(window)
    .height();
  var topWindow = $(window)
    .scrollTop();
  var bottomWindow = topWindow + heightWindow;
  var currentWindow = (topWindow + bottomWindow) / 2;
  $('.parallax')
    .each(function (i) {
      var path = $(this);
      var height = path.height();
      var top = path.offset()
        .top;
      var bottom = top + height;

      // when in range of scrolling
      if (bottomWindow > top && topWindow < bottom) {
        var imgW = path.data('resized-imgW');
        var imgH = path.data('resized-imgH');

        // min when image touch top of window
        var min = 0;

        // max when image touch bottom of window
        var max = -imgH + heightWindow;

        // overflow changes parallax
        var overflowH = height < heightWindow ? imgH - height : imgH -
          heightWindow; // fix height on overflow
        top = top - overflowH;
        bottom = bottom + overflowH;

        // value with linear interpolation
        var value = min + (max - min) * (currentWindow - top) / (bottom - top);

        // set background-position
        var horizontalPosition = path.attr('data-horiz-pos');
        horizontalPosition = horizontalPosition ? horizontalPosition : '50%';
        $(this)
          .css('background-position', horizontalPosition + ' ' + value + 'px');
      }
    });
}

if (!$('html')
  .hasClass('touch')) {
  $(window)
    .resize(parallaxPosition);
  $(window).focus(parallaxPosition);
  $(window)
    .scroll(parallaxPosition);
  parallaxPosition();
}
