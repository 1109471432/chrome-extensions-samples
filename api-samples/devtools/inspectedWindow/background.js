chrome.debugger.onEvent.addListener(function (source, method, params) {
  if (method === 'Network.responseReceived') {
    console.log('Response received:', params.response);
    // Perform your desired action with the response data
  }
});
console.log('background loaded.');
// 发送一个 GET 请求
fetch('https://zh.z-library.sk/', {
  mode: 'no-cors'
})
  .then((response) => {
    console.log('fetch Response received:', response);
  })
  .catch((error) => {
    console.error('Fetch error:', error);
  });
