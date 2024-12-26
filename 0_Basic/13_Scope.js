let abc =   21
const pqr = 22
var xyz = 56

{
    let abc = 23
    const pqr = 24
    //var xyz = 57
    //console.log("Inner:",abc,pqr,xyz);
}

//console.log(abc,pqr,xyz);


function one(){
    const username = "Bishesh"
    function two(){
        const website = "youtube"
        //console.log(username);
        //console.log(website);
    }
    two();
}
//console.log(username);
one();



if(true){
    const username = "Bishesh"
    if(username === "Bishesh"){
        const website = " youtube"
        //console.log(username + website); 
        
    }
    //console.log(website);//error
}
//console.log(username);//error



function addOne(num){   
    return num + 1
}

console.log(addOne(5));


const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5));