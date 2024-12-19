const coding = ["js", "python", "java", "c++", "c#"];
//coding.forEach(function (item) {
//    console.log(item);
//})

//coding.forEach((item) => {
//    console.log(item)
//})

// function printMe(item){
//         //console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr)
// })


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
    console.log(item.languageExtention)
    console.log(item.languageFullName)

})

