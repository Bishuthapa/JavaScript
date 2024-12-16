/*function sumTwoNumbers(a, b) {
    console.log(a + b);
}

sumTwoNumbers(2, 3);



function sumTwoNumbers(a, b) {
    let y=a + b;
    return y;
}
const result = sumTwoNumbers(2, 3);
console.log("result:", result);
 */


function userLoginMessage(userName = "Bishesh") {
    if(!userName){
        console.log("Please enter a username");
        return;
        }
    return `${userName} just login in.`
}
console.log(userLoginMessage());