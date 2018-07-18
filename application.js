document.addEventListener('DOMContentLoaded', function() {
  var urls = [
    "https://www.google.com",
    "https://www.example.com"
  ];

  console.log(urls);

  var index = 0;
  var el = document.getElementById("rotator");
  console.log(el);

  function rotate() {
    if ( index === urls.length ) {
      index = 0;
    }

    el.src = urls[index];
    index  = index + 1;

    setTimeout(rotate, 5000);
  }

  rotate();
  });

