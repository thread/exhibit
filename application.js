function start_rotation() {
  var el = document.getElementById("rotator");
  const ROTATION_TIME = 5000;

  var storage = { urls: ['https://www.thread.com'] };

  chrome.storage.managed.get('urls', function(data) {
    storage.urls = data.urls;
  });

  var index = 0;

  function rotate() {
    if ( index === storage.urls.length ) {
      index = 0;
    }

    el.src = storage.urls[index];
    index  = index + 1;

    setTimeout(rotate, ROTATION_TIME);
  }

  rotate();
};

window.onload = start_rotation;
