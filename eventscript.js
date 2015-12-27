function showPage(id, info, tab) {
    if (tab.url == "https://bannerweb.miamioh.edu/pls/banweb/bwskfcls.P_GetCrse_Advanced") {
        chrome.pageAction.show(id);
    }
}

chrome.tabs.onUpdated.addListener(showPage);

chrome.runtime.onMessage.addListener(function(request, sender, callback) {
    var xhr = new XMLHttpRequest();

    xhr.onload = function() {
        callback(xhr.responseText);
    };

    xhr.onerror = function() {
        callback();
    };

    xhr.open("GET", request.url, true);
    xhr.send();
    return true;
});
