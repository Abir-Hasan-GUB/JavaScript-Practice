document.write("<h1> Enter start Number: ");
var strt = parseInt(prompt("Starting Number: "));
var end = parseInt(prompt("Ending Number: "));
var sum = 0;

for(var i = strt; i<=end; i++){
    if(strt % 3 == 0 &&| strt % 5 == 0){
        sum = sum + i;
    }
}
 
document.write("<h2> <br> Sum of Number is: "+sum);
