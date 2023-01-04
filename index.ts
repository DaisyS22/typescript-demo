export const testFunction = () => {
    console.log("First hello from Typescript - update2")
}

testFunction();

// variable with any - can have any value
var parent: any

// variable with types
var myString:string
var myNumber:number
var myBoolean:boolean

myString = 'Nicky'
myNumber = 10
myBoolean = true

// types in function
// example non arrow function
function add(x:number, y:number):number {
    return x + y;
}
const myTotal:number = add(5, 5);

// Array
var stringArray:string[] = []
stringArray.push('Mike')
stringArray.push('Anna')
stringArray.push('Jose')

// log with object access
console.log('stringArray: ', stringArray)

var anotherArray = new Array(10);
anotherArray.push("Jack Gonzales")
anotherArray.push("Arnold Clavio")
anotherArray[5] = "Mike Enriquez"
console.log('anotherArray: '+ anotherArray)

// enum
enum Direction {
    Up = 555,
    Down,
    Left,
    Right
}

console.log('enum Direction Up', Direction.Up)
console.log('enum Direction Down', Direction.Down)

// interface
interface DogInterface {
    name: string
    breed: string
    eat?: (food:string) => void
}

var myDog:DogInterface = {
    name: 'Snoopy',
    breed: 'Askal',
}

class Dog implements DogInterface {
    name: string
    breed: string
    
    constructor(name: string, breed: string) {
        this.name = name
        this.breed = breed
    }

    eat =  (food:string) => {
        console.log(`${this.name} the ${this.breed} is eating ${food}`)
    }
}

var scooby:Dog = new Dog('Scooby Doo', 'Great Dane')
scooby.eat('sibuyas')













// changes
let parent2 = 'old';
parent2 = 'new';

// constant
const pi = 3.1416;


// type assertion
var variableString:any = 'mynameisjohn'
const lengthOfStr = (variableString as string).length
console.log('length of variableString is: ' + lengthOfStr)