class Animal {
    constructor(name, color){
        console.log("I am the Animal constructor");
        this.name = name;
        this.color = color;
    }
}


let myAnimal = new Animal("Oscar", "Grey");

console.log(myAnimal.name);

let x = 10;
let y = 20;

if(x > y){
    true
}else{
    false
}

const aLargerThanB = (a, b) => {
    if(a > b){
        return "a is larger";
    }else {
        return "a is not larger";
    }
}

const aLargerThanB2 = (a, b) => a > b ? true


class Square {
    constructor(length){
        this.length = length;
        this.area = length * length;
        this.color = ColorGen();
    }
}

class Cat extends Animal {
    constructor(name, color, whiskers){
        console.log("I am the Cat constructor");
        super(name, color);
        this.whiskers = whiskers;
    }
}

let myCat = new Cat("Sheba", "Grey", 120);
console.log(myCat);