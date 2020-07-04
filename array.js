var names = new Array(3);
names[0] = "Abir";
names[1] = "Nahid";
names[2] = "Mim";
// document.write(names[0]);

console.log(names[0]);
console.log(names[1]);
console.log(names[2]);

for (var i =0; i < names.length; i++) {
    document.write(names[i]+" ")
}

var country1 = ["Bangladesh", "India"];
var country2 = ["Pakisthan", "England"];
document.write(country1.concat(country2)+"<br>");
country1.push("man");
country2.push("man");
document.write(country1.concat(country2)+"<br>");
country1.pop();
country1.pop();

country2.pop();
country2.pop();
document.write(country1.concat(country2)+"<br>");
