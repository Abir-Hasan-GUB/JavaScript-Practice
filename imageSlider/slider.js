var photos = ["../imageSlider/1.jpg","../imageSlider/2.jpg","../imageSlider/3.jpg"];
var count = 0;
var imgTag = document.querySelector("img");
function prev(){
    count--;
    if(count < 0){
        count = photos.length - 1;
        imgTag.src = photos[count];
    }else{
        imgTag.src = photos[count];
    }
}

function next(){
    count++;
    if(count >= photos.length){
        count = 0;
        imgTag.src = photos[count];
    }else{
        imgTag.src = photos[count];
    }
    
}