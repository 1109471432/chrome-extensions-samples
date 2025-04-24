// Copyright 2023 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
const requests = [];
const types = {};
chrome.devtools.inspectedWindow.getResources((resources) => {
  resources.forEach((resource) => {
    if (!(resource.type in types)) {
      types[resource.type] = 0;
    }
    types[resource.type] += 1;
  });
  let result = `Resources on this page: 
  ${Object.entries(types)
    .map((entry) => {
      const [type, count] = entry;
      return `${type}: ${count}`;
    })
    .join('\n')}`;
  let div = document.createElement('div');
  div.innerText = result;
  document.body.appendChild(div);
});

chrome.storage.local.set({ name: 'vale222' });
chrome.devtools.network.onRequestFinished.addListener(function (request) {
  // requests.push(JSON.stringify(request, null, 2));
  // 将 request 对象转换为 JSON 字符串
  // const requestData = JSON.stringify(request, null, 2);
  // 创建 Blob 对象
  // const blob = new Blob([requestData], { type: 'application/json' });
  // console.log(blob)
  // // 创建临时 URL
  // const url = URL.createObjectURL(blob);
  // console.log(url)
  // // 生成文件名
  // const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  // const filename = `network_request_${timestamp}.json`;
  //
  // // 触发下载操作
  // chrome.downloads.download({
  //   url: url,
  //   filename: filename,
  //   saveAs: false
  // }, function (downloadId) {
  //   if (chrome.runtime.lastError) {
  //     console.error('下载失败:', chrome.runtime.lastError);
  //   } else {
  //     console.log('下载成功，下载 ID:', downloadId);
  //   }
  //   // 释放临时 URL
  //   URL.revokeObjectURL(url);
  // });
});
