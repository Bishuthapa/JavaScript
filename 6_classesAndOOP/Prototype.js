 let myName = "bishesh    "

 String.prototype.trueLength = function() {
    console.log(`${this}`); // this.length;
    console.log(`True lenght is: ${this.trim().length}`);
 }
 
    myName.trueLength()
    "bishesh".trueLength()
    "iceTea".trueLength()

// let heroes = ["thor", "hulk"]

// let heroPower = {
//     thor : "hammer",
//     hulk : "angry",


//     getHulkPower: function() {
//         console.log('hulk power is ' + this.hulk);

//     }
// }