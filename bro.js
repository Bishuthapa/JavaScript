const display = document.getElementById('display');
function  aaucha(input){///really aaucha
    display.value += input;
}


function clearDisplay(){
    display.value = "";
}




function calculate(){
    try{
        display.value = eval(display.value);
    }catch(err){
        display.value = "Error";
    }
   
}
