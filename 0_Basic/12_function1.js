function sumTwoNumbers(a, b) {
    //console.log(a + b);
}

sumTwoNumbers(2, 3);



function sumTwoNumbers(a, b) {
    let y=a + b;
    return y;
}
const result = sumTwoNumbers(2, 3);
//console.log("result:", result);
 



function userLoginMessage(userName = "Bishesh") {
    if(!userName){
        //console.log("Please enter a username");
        return;
        }
    return `${userName} just login in.`
}
//console.log(userLoginMessage());*/


function calculateCartPrice(val1, val2,...num1) //
{
    return num1;
}
//console.log(calculateCartPrice(200, 400, 600, 800));


const userName= {
    firstName : "Bishu",
    age : 19
}
function guff(anyobject){
   // console.log(`His name is ${anyobject.firstName} and his age is ${anyobject.age}.`);
}

guff(userName);

const newArray = [200, 400, 600, 800];

function returnSecondValue(getArray){
    return getArray[1];
}

//console.log(returnSecondValue(newArray));
//console.log(returnSecondValue([200, 400, 600, 800]));


//choose the AI from the list of books collection

const bookCollectio = ["webTech", "SAD", "AI", "NCD", "OR"];

function chooseAI(getArray){
    for(i=0 ; i< 5; i++)
    {
        if(bookCollectio[i] === "AI")
        {
            console.log(`yes it contain ${getArray[i]} book.`)
            return true;
        }
        
    }
}

console.log(chooseAI(bookCollectio));