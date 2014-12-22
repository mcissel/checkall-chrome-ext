// Receive the event from the extension's popup.js,
// then send it to the extension's content.js (linked with the current tab)
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    chrome.tabs.getSelected(null, function(tab){
        chrome.tabs.sendMessage(tab.id, {type: request.type});
    });
	return true;
});