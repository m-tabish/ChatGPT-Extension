chrome.runtime.onInstalled.addListener(() => {
  console.log('ChatGPT Question Sidebar installed');


  chrome.storage.local.set({ 'hello': "world" }).then(() => {
    console.log("Value is set");
  });

  chrome.storage.local.get(['hello']).then(result => { console.log("value: ", result.key) })
});
