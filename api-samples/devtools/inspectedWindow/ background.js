chrome.runtime.onSuspend.addListener(function () {
  // 在这里执行关闭前需要完成的操作，例如保存数据等
  console.log('后台脚本即将关闭，执行清理操作...');
  // 示例：保存数据到本地存储
  chrome.storage.local.set({ key: 'value' }, function () {
    if (chrome.runtime.lastError) {
      console.error('保存数据时出错:', chrome.runtime.lastError);
    } else {
      console.log('数据保存成功');
    }
  });
});
