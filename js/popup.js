// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


function click(e) {
  chrome.tabs.executeScript(null,
      {code: "alert('hello')"});
  window.close();
}

// Setting up the onClick events for each div (aka button)
// which will trigger the code injection into the active tab.

document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('div');
  console.log(divs);
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }
});