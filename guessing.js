var num ,i,rand,win=0,loss=0;
for( i = 0; i<5; i++){
    num = prompt("Enter Guessing Number 5 times !");
    rand = Math.floor(Math.random()*6);
    if(num == rand){
        console.log("You Have Won | Random Number was "+rand);
        win++;
    }else{
        console.log("You Have Lost | Random Number was "+rand);
        loss++;
    }
}
document.write("You Have Won: "+win+" Time..!!<br>");
document.write("You Have Loss: "+loss+" Time..!!");