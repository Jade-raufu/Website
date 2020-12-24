alert("Connected");
var year = 2020;

var name = prompt("What is your name?");
alert("Hi there " + name);
console.log("You are " + name);

var age = prompt("How old are you?");
alert("You were born on " + "let me guess!");
alert(year - age);

var livedTime = year - age;
console.log("You were born on " + livedTime);

if(name === "Jarvis")
{
	alert("Access Granted")
	alert("Welcome Jarvis");
}
else{
	alert("Acess Denied");
	alert("Refresh this page");
	alert("Good bye");
}
if(age === 12)
{
	alert("Continue");
}