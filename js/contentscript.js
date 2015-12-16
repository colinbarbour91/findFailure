//alert('hello ' + document.location.href);

console.log("Starting Content Script");

function getDivs() {
    /**
    * Get All divs in the activeTab
    */
    console.log("getDivs: Start");
    var elements = document.getElementsByClassName("test_error_line");
    console.log(elements);
    return elements;
}

var divs = getDivs();
console.log("Ending Content Script: " + divs)
divs[0].scrollIntoView();
