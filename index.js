"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayNames = exports.addName = exports.loopDogs = exports.testFunction = void 0;
const testFunction = () => {
    console.log("First hello from Typescript - update2");
};
exports.testFunction = testFunction;
(0, exports.testFunction)();
// variable with any - can have any value
var parent;
// variable with types
var myString;
var myNumber;
var myBoolean;
myString = 'Nicky';
myNumber = 10;
myBoolean = true;
// types in function
// example non arrow function
function add(x, y) {
    return x + y;
}
const myTotal = add(5, 5);
// Array
var stringArray = [];
stringArray.push('Mike');
stringArray.push('Anna');
stringArray.push('Jose');
// log with object access
console.log('stringArray: ', stringArray);
var anotherArray = new Array(10);
anotherArray.push("Jack Gonzales");
anotherArray.push("Arnold Clavio");
anotherArray[5] = "Mike Enriquez";
console.log('anotherArray: ' + anotherArray);
// enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 555] = "Up";
    Direction[Direction["Down"] = 556] = "Down";
    Direction[Direction["Left"] = 557] = "Left";
    Direction[Direction["Right"] = 558] = "Right";
})(Direction || (Direction = {}));
console.log('enum Direction Up', Direction.Up);
console.log('enum Direction Down', Direction.Down);
var myDog = {
    name: 'Snoopy',
    breed: 'Askal',
};
class Dog {
    constructor(name, breed) {
        this.eat = (food) => {
            console.log(`${this.name} the ${this.breed} is eating ${food}`);
        };
        this.name = name;
        this.breed = breed;
    }
}
var scooby = new Dog('Scooby Doo', 'Great Dane');
scooby.eat('kibble');
var dogArray = [];
const addDog = (dog) => {
    dogArray.push(dog);
};
addDog(scooby);
addDog(myDog);
addDog({
    name: 'Bantay',
    breed: 'Akita',
    eat: (food) => { console.log(); }
});
const loopDogs = () => {
    // for
    console.log('for loop');
    for (let i = 0; i < dogArray.length; i++) {
        console.log(dogArray[i]);
    }
    // for (enhanced or shorthand)
    console.log('for loop shorthand');
    for (let data of dogArray) {
        console.log(data);
    }
    // for (index)
    console.log('for loop index');
    for (let data in dogArray) {
        console.log(dogArray[data]);
    }
    // while
    let i = 0;
    console.log('while loop');
    while (i < dogArray.length) {
        console.log(dogArray[i]);
        i++;
    }
    // forEach
    console.log('forEach');
    dogArray.forEach(element => {
        console.log(element);
    });
    // map
    console.log('map');
    dogArray = dogArray.map(data => {
        console.log(data);
        data.breed = 'morph';
        return data;
    });
    // forEach
    console.log('forEach2');
    dogArray.forEach(element => {
        console.log(element);
    });
};
exports.loopDogs = loopDogs;
(0, exports.loopDogs)();
let x = 2;
// switch
switch (x) {
    case 1:
        break;
}
var tuple = ['myString', 500];
var names = [];
const addName = (name) => {
    names.push(name);
    (0, exports.displayNames)();
};
exports.addName = addName;
const displayNames = () => {
    var list = document.getElementById('myList');
    if (list) {
        while (list.hasChildNodes() && list.firstChild) {
            list.removeChild(list.firstChild);
        }
    }
    names.forEach(data => {
        let li = document.createElement('li');
        li.innerText = data;
        if (list) {
            list.appendChild(li);
        }
    });
};
exports.displayNames = displayNames;
///////////////////////////
// changes
let parent2 = 'old';
parent2 = 'new';
// constant
const pi = 3.1416;
// type assertion
var variableString = 'mynameisjohn';
const lengthOfStr = variableString.length;
console.log('length of variableString is: ' + lengthOfStr);
