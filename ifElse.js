document.write("<h2> Enter Any Number: ");
var num = parseInt(prompt("Enter Any Number: "),10);

document.write("<h3> Grate: ");
if(num > 100){
    document.write("worng input");
}
else if(num >= 80 && num <= 100){
    document.write("A+");
}
else if(num >= 70 && num <=80){
    document.write("A");
}else
document.write("Faill");