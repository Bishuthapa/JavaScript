const userName = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    city: 'New York'
}

for (const key in userName) {
    console.log(`${key}: ${userName[key]}`);
}

const arr = ["js", "python", "java", "c++", "c#"];
for (const num in arr) {
    console.log(arr[num]);
}