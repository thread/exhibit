function start_rotation() {
  var el = document.getElementById("rotator");

  var storage = {
    urls: ['https://www.thread.com', 'https://www.example.com'],
    rotation_time: 5000
  };

  chrome.storage.managed.get(null, function(data) {
    if (data.urls != undefined) {
      storage.urls = data.urls;
    }
    if (data.rotation_time != undefined) {
      storage.rotation_time = data.rotation_time;
    }
  });

  var index = 0;

  function rotate() {
    if ( index === storage.urls.length ) {
      index = 0;
    }

    el.src = storage.urls[index];
    index  = index + 1;

    setTimeout(rotate, storage.rotation_time);
  }

  rotate();
};

window.onload = start_rotation;
