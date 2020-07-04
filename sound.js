var length = document.querySelectorAll(".button").length;

for(var i=0; i<length; i++){
    document.querySelectorAll(".button")[i].addEventListener("click",function(){
        var text = this.innerHTML;
      playAudio(text);
      addAnim(text);
        
    });
}

function playAudio(text){
     
    switch(text){
        case "a":
            var audio = new Audio("sound/1.mp3");
            audio.play();
            break;

             case "b":
            var audio = new Audio("sound/2.mp3");
            audio.play();
            break;

            case "c":
                var audio = new Audio("sound/3.mp3");
                audio.play();
                break;
    }
}

//add keypress listener
document.addEventListener("keypress",function(m){
    var text = m.key.toLowerCase();
    
    if(text != 'a' && text != 'b' && text != 'c'){
        
        console.log("Wrong");
    }else{
        playAudio(text);
        addAnim(text);
    }
});

function addAnim(text){
 var a =  document.querySelector("."+text);
   a.classList.add("anim");

   setTimeout(function(){
       a.classList.remove("anim");
   }, 500);
}