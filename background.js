var runApp = function() {
  if (chrome.power) {
    chrome.power.requestKeepAwake('display');
  }

  chrome.app.window.create(
      'view.html',
      {
        id: 'ExhibitWindow',
        width: 1100,
        height: 720,
        minWidth: 800,
        minHeight: 600
      },
  )
};

chrome.app.runtime.onLaunched.addListener(function() {
  runApp();
});

chrome.app.runtime.onRestarted.addListener(function() {
  runApp();
});
