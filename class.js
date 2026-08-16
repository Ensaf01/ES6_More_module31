const prodcts=[
    {id:1,name:"laptop",price:10000},
    {id:2,name:"mobile",price:20000},
    {id:3,name:"tablet",price:30000},
    {id:4,name:"desktop",price:40000},
    {id:5,name:"watch",price:10000}
]


//similar
// every class has 2 things 1. constructor(properties) 2. methods 
class Product{
    country="Bangladesh"; // this is poperty of class procudct,it like variable but it is property of class, we can access it by object of class
    city="Dhaka";
    speak(talk){ // it like function but it is method of class, we can access it by object of class ,like pordoct1.speak("Hello, I am product1"); ,product1 is object of class Product and speak is method of class Product
        console.log(`talking about ${talk}`);
    }

    constructor(name){// special method of class ,special kichu jinis thake ja onno method e thake na,it must be call when we create object of class, it is like function but it is method of class, we can access it by object of class ,like pordoct1.constructor(); ,product1 is object of class Product and constructor is method of class Product
        // console.log(`constructor is called`);
        this.names=name;

    } 
}

const product1=new Product("Ensaf"); // we create object of class Product and pass name as argument to constructor method of class Product
console.log(product1); // Bangladesh,dhaka name Ensaf
//console.log(product1.names); // Ensaf
//console.log(product1.city); // Dhaka
product1.speak("Hello, I am product1\n\n"); // Hello, I am product1


console.log("another example of class\n");

class Teacher{
    constructor(name,subject){
        this.name=name;
        this.subject=subject;
    }
    lecture(){
        console.log(`I am ${this.name} and I teach ${this.subject}`);
    }
}

const teacher1=new Teacher("John", "Math"); // we create object of class Teacher and pass name and subject as arguments to constructor method of class Teacher
teacher1.lecture(); // I am John and I teach Math

console.log(teacher1); // Teacher { name: 'John', subject: 'Math' }
