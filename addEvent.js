var addStyle = document.querySelector("h1");

addStyle.addEventListener("mouseover",function(){ //add style
    addStyle.classList.add("add-style");
});

addStyle.addEventListener("mouseout",function(){ // remove style
    addStyle.classList.remove("add-style");
});

document.querySelector(".btn1").addEventListener("click",myFunAdd);

function myFunAdd(){
    addStyle.classList.add("add-style");
}

document.querySelector(".btn2").addEventListener("click",myFunRmv);

function myFunRmv(){
    addStyle.classList.remove("add-style");
}
function abir(){ // onclick property example
    var m = document.querySelector("h2");
    m.classList.add("add-style");
}