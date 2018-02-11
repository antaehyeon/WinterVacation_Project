(function() {
  var availableBrowser = function() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
      // IE 10 or older => return version number
      return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10) >= 10;
    }
    return true;
  };

  if (availableBrowser()) {
    var root = document.getElementById("ch-plugin");
    root.innerHTML += "<iframe id='ch-plugin-script' style='visibility:hidden;position:absolute;width:0;height:0;border:0'></iframe><div id='ch-plugin-core'></div>";

    var iframe = document.getElementById('ch-plugin-script');
    var scriptIsLoaded = false;

    var loadScript = function () {
      var src = 'https://cdn.channel.io/plugin/ch-plugin-core-20180106-3uCqG70fLD.js';
      var doc = (iframe.contentDocument || iframe.contentWindow.document);
      doc.open();
      doc.write('<script async type="text/javascript" src=' + src + ' charset="UTF-8"></script>');
      doc.close();
      scriptIsLoaded = true;
    }

    if (!iframe.onload) {
      loadScript();
    }

    iframe.onload = function () {
      if (!scriptIsLoaded) {
        loadScript();
      }
    }
  }
})();
