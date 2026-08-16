class person{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
    method1(){
        console.log(`My name is ${this.name} and I am ${this.age} years old`);
    }
    activity(){
        this.method1();
    }
} 

const person1=new person("John", 30);// periosn1 is object or instance of class person, we can access the properties of class person by object person1
console.log(person1.name); // John
console.log(person1); // person { name: 'John', age: 30 }

person1.method1(); // My name is John and I am 30 years old
person1.activity(); // My name is John and I am 30 years old ,same as method1() because activity() method call method1() method