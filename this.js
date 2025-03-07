// const person = {
//     name: 'biplob',
//     action: function(){
//         console.log(this.name)
//     }
// }
// person.action()


class Person{
    #status;
    constructor(name,age,status){
        this.name = name;
        this.age = age;
        this.#status = status;
    }
    sleep(){
        console.log(`${this.name} sleeps at 10PM`)
    }
    action(){
        console.log(`${this.name} is still ${this.#status}`);
    }
}

const salimUddin = new Person('salim',12,'single');

// console.log(salimUddin)
// salimUddin.sleep()

// const jashimUddin = new Person('jashim',12);
// console.log(jashimUddin)
// jashimUddin.sleep()

console.log(salimUddin.status)
salimUddin.action();