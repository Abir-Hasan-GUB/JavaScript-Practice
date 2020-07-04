function function1(){ // alert somthing using button
    alert('This Is Function One');
}


function chengePara(){ // write somthing in paragraph tag using JS and Onclick
    var para = document.querySelector("#para");
    para.innerHTML = "After click btn This is write to para in P tag.";
}

function addCatImage(){ // chenge image using onclick and query selector using JS
    var getImg = document.querySelector("#catImg");
    getImg.src = "https://image.shutterstock.com/image-photo/portrait-surprised-cat-scottish-straight-600w-499196506.jpg";
}