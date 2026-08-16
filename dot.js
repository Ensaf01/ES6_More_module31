const person ={
    name:"John",
    age:30,
    4: "four",
    "add-ress":"New York"
    
}

const na='name';
console.log(person.name);// direct access of property
console.log(person['name']);// access property by string
console.log(person[na]);// access property by variable

console.log("must be use []");// access property by number
console.log(person[4]); // four
console.log(person["add-ress"]); // New York