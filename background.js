chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "tweetSelectedText",
      title: "Tweet this text",
      contexts: ["selection"]
    });
  });
  
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "tweetSelectedText") {
      const selectedText = info.selectionText;
      const pageUrl = tab.url;
      const tweetText = `${selectedText} \n source - (${pageUrl})`;
      const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
      chrome.tabs.create({ url: tweetUrl });
    }
  });
  