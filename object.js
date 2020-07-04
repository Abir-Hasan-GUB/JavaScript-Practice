// Normal Way of decler object

var People1 = {
    name: "Abir Hasan",
    age : 22,
    lang: "Bangla"
}

var People2 = {
    name: "Nahid Hasan",
    age : 24,
    lang: "English"
}
document.write("People One: "+"</br>");
document.write(People1.name + "</br>");
document.write(People1.age + "</br>");
document.write(People1.lang + "</br>");

//Create a template of object for multiple time use
// First create a " Constractor of Object"

function Objects(name, age, lang){
    this.name = name;
    this.age = age;
    this.lang = lang;
    
    //create a function inside a constractor 
    this.disply = function(){
        document.write("<br>Print By Function: <br>")
        document.write(this.name+"<br>");
        document.write(this.age+"<br>");
        document.write(this.lang+"<br>");
    }
}

var student1 = new Objects("Abir Hasan",21,["Bangla","English"]); // object decler and initialize

document.write("<br>Objet by Constractor: "+"<br>");
document.write(student1.name+"<br>");
document.write(student1.age+"<br>");
document.write(student1.lang+"<br>");

// print object value use function of constractor
student1.disply(); //call function use obj name
