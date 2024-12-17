//Immediately Invoked Function Expression (IIFE)
(function one(){
    //name IIFE
    console.log("First Database connected");
})();

(() => {
    //Simple IIFE
    console.log("Second Database connected");
})();