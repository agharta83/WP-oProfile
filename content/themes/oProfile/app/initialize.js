var scrollex = require('jquery.scrollex');

var app = {
  
  init: function() {
    app.plugInUiButtonsEvents();
    app.plugInBannerEvents();
  },

  plugInUiButtonsEvents: function() {
    var $menuSelector = 'menu';
    var $uiButtons = $('.ui-button');
    var $menu = $("." + $menuSelector);

    $uiButtons.on("click", function() {
        $menu.toggleClass($menuSelector + '--visible');
      });
  },

  plugInBannerEvents: function() {
    var $headerSelector = 'header';
    var $banner = $('.banner');
    var $header = $('.' + $headerSelector);

    $banner.scrollex({
      bottom: $header.height() + 12,
      enter: function() {
        $header.removeClass($headerSelector + '--fixed');
      },
      leave: function() {
        $header.addClass($headerSelector + '--fixed');
      }
    });
  }
};

$(app.init);
