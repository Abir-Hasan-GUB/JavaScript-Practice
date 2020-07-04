//function
function add(num1, num2){
 var result = num1 + num2;
 return result;
}

function sub(num1, num2){
 var result = num1 - num2;
 return result;
}

var addition = add(10,20);
var substraction = sub(30,20);

document.write("Sum is: "+addition + "<br>");
document.write("Sub is: "+substraction);