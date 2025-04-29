console.log('background loaded.');
chrome.debugger.onEvent.addListener(function (source, method, params) {
  if (method === 'Network.responseReceived') {
    console.log('Response received:', params.response);
    // Perform your desired action with the response data
  }
});
