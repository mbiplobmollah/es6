class Product{
    

    constructor(name,price,brand,owner){
        this.name= name;
        this.price= price;
        this.brand= brand;
        this.owner= owner;
    }

    details(){
        console.log(`ami ${this.name} product er details`)
    }

}

const iphone = new Product('iphone','1234','apple','Biplob Mollah');
iphone.details()
// console.log(iphone)

const xiaomi = new Product('xiaomi','1000','xiaomi','Biplob Mollah');
console.log(xiaomi)

xiaomi.details()