// Receive a message from the extension's background.js
chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
	switch(message.type) {
		case "all":
			check(function() {return true;});
			break;
			
		case "none":
			check(function() {return false;});
			break;
			
		case "toggle":
			check(function(checkbox) {return !checkbox.checked;});
			break;
	}
	
	function check(valueFunction) {
		var inputs = window.document.getElementsByTagName('input');
		for (var i = 0; i < inputs.length; i++) {
			if (inputs[i].type && inputs[i].type == 'checkbox') {
				inputs[i].checked = valueFunction(inputs[i]);
			}
		}
	}
});

