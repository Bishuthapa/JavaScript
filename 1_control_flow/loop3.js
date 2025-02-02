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
    //console.log(item.languageExtention , " ===>", item.languageFullName)
    // console.log(item.languageFullName)

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
/*ForEach will not return anything, it just applies the conditions
 to every element. It will not change the original array.*/


car.forEach((models) =>{
    //console.log(models.model)

})


const newArray = [200, 400, 600, 800];

newArray.filter((item) => {
    //console.log(item);
});

/*The map() function receives a function as a parameter and will apply 
the code on each element and returns an entirely new array. It will not change the original array.
A map() function returns a new array and thus it should only be used
 if you are going to use the returned array else one should prefer forEach() function.*/
const newArray1 = [200, 400, 600, 800];

let u = newArray1.map((num) => (num + 100));
//console.log(u);

/*Return Value

map() will return a new array as per the conditions applied.
forEach() will not return anything. forEach() returns undefined.
filter()method will return an array of matching elements else will return an empty array if no matching happens.
If you have a requirement to modify the current array and are expecting a modified one, then you should go with map().
If you just want to iterate the array, then you can use forEach().
If you are expecting filtered values from a given array then you should use the filter() method.
As forEach() returns undefined, you can not attach other functions like filter() with it.
You can easily apply filter() with map().
Other JavaScript methods can be attached with the filter() method.*/