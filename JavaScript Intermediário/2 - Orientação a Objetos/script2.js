function Animal() {
    this.sleep = function() {
        console.log("ZZzzzz");
    }
}

function Dog() {
    this.bark = function() {
        console.log('woof');
    }
}

Dog.prototype = new Animal();

var myDog = new Dog();

myDog.sleep();
myDog.bark();