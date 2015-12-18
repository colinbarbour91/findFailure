//alert('hello ' + document.location.href);

console.log("Starting Content Script");

var divs = getDivs();
var current = getCurrent();

function init() {
    //var bg = chrome.extension.getBackgroundPage();

     var errorCount = divs.length;
    if(errorCount > 0)
    {
        console.log("errorCount: " + errorCount);
        //chrome.browserAction.setBadgeBackgroundColor({
        //    color: [255, 0, 0, 255]
        //});
        //chrome.browserAction.setBadgeText({text: '' + errorCount});
    }
}

function getCurrent() {
    // Get current position or init to 0
    var current = 0;
    chrome.storage.local.get('current', function (result) {
        if(result.current != null) {
            current = result.current;
            console.log("Storage Value Current: " + result.current);
        }
    });
    console.log("getCurrent: Returning: " + current);
    return current;
}

function getDivs() {
    /**
    * Get All divs in the activeTab
    */
    console.log("getDivs: Start");
    var elements = document.getElementsByClassName("test_error_line");
    console.log(elements);
    return elements;
}

function moveForward() {
    /*
    *   Moves forward to next error. 
    */
    var position = getCurrent();
    divs[position].scrollIntoView();
    //setCurrent(position + 1);
}

function setCurrent(new_current) {
    /*
    *   Sets current value in storage by sending content to background
    */
    chrome.extension.sendMessage({"current": new_current}, function(response) {
        if(response.success) console.log("Saved successfully");
        else console.log("There was an error while saving")
    });
}

init();
moveForward();
