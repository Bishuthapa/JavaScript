const promiseOne = new Promise(function (resolve, reject){
    setTimeout(function(){
        console.log("Bibit");
        resolve();
    },1000)
   
})
promiseOne.then(function(){
    console.log("promise is resolved.")
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Bibit");
        resolve();
    },1000)
}).then(function(){
    console.log("promise is resolved.")
})

const promistThree = new Promise(function(resolve, reject)
{
    setTimeout(function(){
        resolve({username:"bishu", email: "thapabishu435@gmail.com"})
    },1000)
}).then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"Bibit", email: "BIbit435@gmail.com" });
        }else{
            reject('error: something went wrong')
        }
    },1000)
})

promiseFour.then((user) =>{
    console.log(user);
} ).catch((error) =>{
    console.log('error');
    
}
)



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"Bibit", email: "BIbit435@gmail.com" });
        }else{
            reject('error: something went wrong')
        }
    }, 1000)

})

async function consumePromiseFive(){
    try {
        
    const response = await promiseFive;
    console.log(response);

    } catch (error) {
        console.log(error);
        
    }
}
consumePromiseFive();



async function getAllUser(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);      
}

getAllUser();