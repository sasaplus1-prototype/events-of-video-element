(function(){
  'use strict';

  var video, keys;
  
  video = document.getElementById('js-video');

  for (keys in video) {
    if (/^on/.test(keys)) {
      video.addEventListener(keys.replace(/^on/, ''), function(event) {
        console.group(event.type);
        console.log(event);
        console.groupEnd();
      }, false);
    }
  }
}());
