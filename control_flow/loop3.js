const coding = ["js", "python", "java", "c++", "c#"];
//coding.forEach(function (item) {
//    console.log(item);
//})

coding.forEach((item) => {
    //console.log(item)
})

 function printMe(item){
         //console.log(item);
 }

 coding.forEach(printMe)
 coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr)
 })


const myArray = [
    {
        languageFullName : "javascript",
        languageExtention : "js" 
    },
    {
        languageFullName:  "python",
        languageExtention : "py"
    },
    {
        languageFullName : "java",
        languageExtention : "java"
    }
]
myArray.forEach((item) => {
    //console.log(item.languageExtention)
    //console.log(item.languageFullName)

})


const car = [
    {
        name : "BMW",
        model : "X5",
        year : 2022
    },
    {
        name : "Audi",
        model : "A8",
        year : 2022
    },
    {
        name : "Mercedes",
        model : "C63",
        year : 2022
    },
    {
        name : "Porsche",
        model : "Cayman",
        year : 2022
    },
    {
        name : "Lamborghini",
        model : "Aventador",
        year : 2022
    },
    {
        name : "Ferrari",
        model : "F8",
        year : 2022
    },
    {
        name : "Bugatti",
        model : "Chiron",
        year : 2022
    },
    {
        name : "Lamborghini",
        model : "Huracan",
        year : 2022
    }
]
car.forEach((models) =>{
    //console.log(models.model)

})


const newArray = [200, 400, 600, 800];

newArray.filter((item) => {
    //console.log(item);
});


const newArray1 = [200, 400, 600, 800];

let u = newArray1.map((num) => (num + 100));
console.log(u);