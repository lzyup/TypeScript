let message: string = 'Hello, TypeScript'

let greeting: (name: string) => string;

let pengding: boolean = false;

let scores: number[] = [1, 2, 3]

let skill: [string, number];
skill = ['Programming', 5];

enum Month {
    Jan,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec
}

let result1: any;

let employee: object;

employee = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
}

//union types
let result: number | string;
result = 10; //ok
result = 'Hi';// alse ok
result = false;// a boolean value, not ok


type alphanumeric = string | number
let input: alphanumeric;
input = 100; //valid;
input = 'Hi';//valid;
input = false;//Compiler error

// aliases types
type chars = string;
let message2: chars // same as string type

//Literal Types
let click: 'click';
click = 'click';// valid
click = 'dbclick';// compiler error

let mouseEvent: 'click' | 'dblclick' | 'mouseup' | 'mousedown';
mouseEvent = 'click';//valid
mouseEvent = 'dblclick';// valid
mouseEvent = 'mouseup';//valid
mouseEvent = 'mousedown';//valid
mouseEvent = 'mouseover';//compiler error

type MouseEvent1 = 'click' | 'dblclick' | 'mouseup' | 'mousedown';
let mouseEvent1: MouseEvent1;
mouseEvent1 = 'click';//valid
mouseEvent1 = 'dblclick';// valid
mouseEvent1 = 'mouseup';//valid
mouseEvent1 = 'mousedown';//valid
mouseEvent1 = 'mouseover';//compiler error



function log(message): void {
    console.log(message);
}

//function
let add = function (x: number, y: number) {
    return x + y;
}

//Optional Paramters
function multiply(a: number, b: number, c?: number): number {
    if (typeof c !== 'undeifned') {
        return a * b * c;
    }
    return a * b;
}

//Default Paramters
function applyDiscount(price: number, discount: number = 0.05): number {
    return price * (1 - discount);
}

//Rest Paramters
function getTotal(...numbers: number[]): number {
    let total = 0;
    numbers.forEach((num) => total += num);
    return total;
}

//function overloading
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
    return a + b;
}

//intersection types 交叉类型
interface BusinessParnter {
    name: string,
    credit: number,
}

interface Identity {
    id: number,
    name: string
}

interface Contact {
    email: string;
    phone: string;
}

type Employee = Identity & Contact;

let e: Employee = {
    id: 100,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(408)-897-5684'
}

interface Person {
    firstName: string;
    middleName?: string;
    lastName: string;
}

function getFullName(person: Person) {
    if (person.middleName) {
        return `${person.firstName} ${person.middleName} ${person.lastName}`
    }
    return `${person.firstName} ${person.lastName}`
}



let heading = document.createElement('h1');
heading.textContent = message;
document.body.appendChild(heading);
console.log(message);