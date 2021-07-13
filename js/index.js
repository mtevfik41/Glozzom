// Get the current year for the copyright
$('#year').text(new Date().getFullYear());

// Configure Slider

$('.carousel').carousel({
  interval: 6000,
  pause: 'hover',
});

// Lightbox Init
$(document).on('click', '[data-toggle="lightbox"]', function (event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});

$(function () {
  $('.modal').on('hidden.bs.modal', function (e) {
    $iframe = $(this).find('iframe');
    $iframe.attr('src', $iframe.attr('src'));
  });
});
// Video Play
$(function () {
  // Auto play modal video
  $('.video').click(function () {
    var theModal = $(this).data('target'),
      videoSRC = $(this).attr('data-video'),
      videoSRCauto =
        videoSRC +
        '?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=0';
    $(theModal + ' iframe').attr('src', videoSRCauto);
    $(theModal + ' button.close').click(function () {
      $(theModal + ' iframe').attr('src', videoSRC);
    });
  });
});

$('.slider').slick({
  infinite: true,
  slideToShow: 1,
  slideToScroll: 1,
});
