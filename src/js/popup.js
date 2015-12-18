function hello() {
  chrome.tabs.executeScript({
    file: '/js/contentscript.js'
  }); 
}

document.getElementById('forward').addEventListener('click', hello);
