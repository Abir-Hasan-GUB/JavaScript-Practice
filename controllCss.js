function addCss(){
    var myCss = document.querySelector("#para");
    myCss.classList.add("para-style");  // here does not add (.) in class name
}
function removeCss(){
    var myCss = document.querySelector("#para");
    myCss.classList.remove("para-style");   // here does not add (.) in class name
}