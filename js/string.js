/*let kali= "god"
console.log(kali + " Bishu" + " thapa");*/
/*use insted
let n="bishu";
console.log('Hello' + " " + "Bishu" + " " + "thapa");
console.log(n.toUpperCase());


let name= "Bibit";
const newName = name.substring(3,4);  
console.log(newName);
console.log(name.length);

const anotherName = name.slice(-5);
console.log(anotherName);*/


let name= "Bibit";
const newString = "     Bibit thapa     ";
console.log(newString);
console.log(newString.trim());



const url = "https://bishu.com/bishu%20thapa";
url.replace('%20', '-');
console.log(url.replace('%20', '-'));


console.log(url.includes('bishu'));//true

console.log(url.includes('bishu1'));//false

const fullName = "bishu-thapa";

console.log(fullName.split('-'));


