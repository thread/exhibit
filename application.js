function start_rotation() {
  var el = document.getElementById("rotator");
  const ROTATION_TIME = 5000;

  var urls = ['https://www.thread.com'];

  var index = 0;

  function rotate() {
    if ( index === urls.length ) {
      index = 0;
    }

    el.src = urls[index];
    index  = index + 1;

    setTimeout(rotate, ROTATION_TIME);
  }

  rotate();
};

window.onload = start_rotation;
