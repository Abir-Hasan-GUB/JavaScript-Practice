var count = 0;

document.querySelector("textarea").addEventListener("keypress",function(event){
    count++;
    var text = event.key;
    document.querySelector("p").innerHTML = "You Pressed: "+"\"" +text+"\"" + " And total charecter is: "+count;
});