/*//for of
const arr = [1, 2, 3, 4, 5, 6];
for (const num of arr) {
    console.log(num);
    
}
const disease = "pneumonoultramicroscopicsilicovolcanoconiosis"
let i=1;
for (const word of brother){
    //console.log(`number is ${i} of ${word}.`)
    i++;
}


*/
/*/MAP in js.
Map is an object in js.
-It hold unique key values.
-It remember it's order.
*/

const map = new Map()
{
    map.set ('NRP', "Nepal"),
    map.set ('INR' ,"India"),
    map.set ('dollor', "USA");
}
console.log(map);
console.log(map.get("INR"));


for (const [key, value] of map) {
    console.log(key, ":-" , value);
    
}