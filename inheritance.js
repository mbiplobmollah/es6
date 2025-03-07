class Vehicle {
    constructor(name,price){
        this.name = name;
        this.price = price;

    }
    move(){
        console.log('ami cholachol korte pari')
    }

}
class Bus extends Vehicle{
    constructor(name,price,seat){
        super(name,price);
        this.seat = seat;
    }
    route(){
        console.log('dhaka to cox')
    }
}

const greenLine = new Bus('greenline','12',50);
console.log(greenLine);
greenLine.move()
greenLine.route()

class Truck extends Vehicle{
    constructor(name,price,load){
        super(name,price);
        this.load = load;
    }
    load (){
        console.log('This has a load of 500kg')
    }
}