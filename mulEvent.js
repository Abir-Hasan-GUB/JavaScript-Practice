var btnLength = document.querySelectorAll(".mybutton").length;//find length of btn

for(var i=0; i<btnLength; i++){
    document.querySelectorAll(".mybutton")[i].addEventListener("click",function(){
        var text = this.innerHTML;
        document.querySelector("h1").innerHTML = text + " Clicked";
    });
}
     