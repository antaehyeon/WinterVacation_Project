$(".full img").on("click", function() {
  $(this).toggleClass("zoom");
});


(function($) {

  $(function() {
    var jcarousel = $('.jcarousel')
    jcarousel
      .on('jcarousel:create jcarousel:reload', function() {
        var element = $(this),
            width = element.innerWidth();

        if (width > 992) {
          width = width / 3;
        } else if (width > 767) {
          width = width / 2;
        } else {
          width = width;
        }

        element.jcarousel('items').css('width', width + 'px');
      })
      .jcarousel({
        wrap: 'circular'
      })
      .jcarouselAutoscroll({
        interval: 4000,
        target: '+=1',
        autostart: true
      });

    $('.jcarousel-control-prev')
      .jcarouselControl({
          target: '-=1'
      });

    $('.jcarousel-control-next')
      .jcarouselControl({
          target: '+=1'
      });

    $('.jcarousel-pagination')
      .on('jcarouselpagination:active', 'a', function() {
        $(this).addClass('active');
      })
      .on('jcarouselpagination:inactive', 'a', function() {
        $(this).removeClass('active');
      })
      .on('click', function(e) {
        e.preventDefault();
      })
      .jcarouselPagination({
        perPage: 1,
        item: function(page) {
          return '<a href="#' + page + '">' + page + '</a>';
        }
      });
  });

})(jQuery);
