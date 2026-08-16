class vehcile{
    constructor(name, model, color){// constructor overloading is not possible in javascript, we can only have one constructor in a class, if we define multiple constructors then the last constructor will be used and the previous constructors will be ignored
        this.name=name;
        this.model=model;
        this.color=color;
    }
    constructor(){}// empty constructor

    constructor(name, price){
        this.name=name;
        this.price=price;
    }
    move(){
        console.log("Vehicle is moving");
    }
}

class bus extends vehcile{
    constructor(name, price, seats, ticektPrice){
        super(name, price);// super is used to call the constructor of parent class, we can only call one constructor of parent class, if we call multiple constructors then the last constructor will be used and the previous constructors will be ignored
        this.seats=seats;
        this.ticektPrice=ticektPrice;
    }
    move(){// method overriding is possible in javascript, we can override the method of parent class in child class, if we define the same method in child class then the method of child class will be used and the method of parent class will be ignored
        super.move();
        console.log("Bus is moving");
    }

    move2(){
        console.log("Bus is moving");
    }
}

class truck extends vehcile{
    constructor(name, price, capacity){
        super(name, price);
        this.capacity=capacity;
    }
}