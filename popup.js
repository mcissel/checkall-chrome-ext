// Send a message to the extension's background.js
window.onload = function() {
	document.getElementById("all").onclick = function() {
		chrome.extension.sendMessage({
	        type: "all"
	    });
	}
	document.getElementById("none").onclick = function() {
		chrome.extension.sendMessage({
	        type: "none"
	    });
	}
	document.getElementById("toggle").onclick = function() {
		chrome.extension.sendMessage({
	        type: "toggle"
	    });
	}
}