const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];


//marvel_heros.push(dc_heros);
//console.log(marvel_heros);

//newHeros = marvel_heros.concat(dc_heros);
//console.log(newHeros);
//uses spread array
const all_new_heros = [...marvel_heros,...dc_heros]
//console.log(all_new_heros);

const k_array = [1, 2, 3, 4,[3, 8, 9], 5, [6, [1, 3, 5],7], 8,9,]
const real_array = k_array.flat(Infinity);//flat arrange all array inside array into a single array.
//console.log(k_array);
//console.log(real_array);


console.log(Array.isArray("Bishesh"));
console.log(Array.from("bishesh"));
console.log(Array.from({name:"bishesh"}));
let score1= 100
let score2= 200
let score3= 300

console.log(Array.of(score1,   score2,score3));




