//A simple calculator to be displayed on a dialog box.
const operations = prompt('By Chioma: Please Enter the operation you want to perform. +, -, * , /.');
const value1 = parseFloat(prompt("Enter The First Value: "));
const value2 = parseFloat(prompt("Enter The Second Value: "));

let result;

if (operations === "+") {
     result = value1 + value2;

} else if (operations === "-") {
     result = value1 - value2;

} else if ( operations === "*"){
     result = value1 * value2;

} else if (operations === "/"){
     result = value1 / value2;

} else if (operations === "%"){
     result = value1 % value2;

}else {
     alert("You selected a wrong operation");
}

alert (result);