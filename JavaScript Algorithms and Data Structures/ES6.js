//step1: var vs let
function checkScope() {
    let i = 'function scope';
    if (true) {
      let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
}

//step2: Mutate Array
const s = [5, 7, 2];
function editInPlace() {
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
}
editInPlace();

//step3: Prevent Object Mutation
function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    Object.freeze(MATH_CONSTANTS);
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj()

//step4: Arrow Fuctions
const magic = () => new Date();

//step5: Arrow Functions Parameters
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));

//step6: Default Parameters 
const increment = (number, value = 1) => number + value;

//step7: Rest Parameters
const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
}

//step8: Spread Operator
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [...arr1];
console.log(arr2);

//step9: Destructuring Assignment
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};
const {today, tomorrow} = HIGH_TEMPERATURES;

//step10
const HIGH_TEMPERATURES1 = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
}
const {today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES1;

//step11
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};
const {today: {low:lowToday, high: highToday1}} = LOCAL_FORECAST;

//step12
let a = 8, b = 6;
[a , b] = [b, a];

//step13
function removeFirstTwo(list) {
    const [,,...shorterList] = list;
    return shorterList;
}
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);

//step14
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
const half = ({max, min}) => (max + min) / 2.0; 

//step15: Template literals
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {

    const failureItems = [];
    for (let i = 0; i < arr.length; i++) {
        failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
    }
  
    return failureItems;
}
const failuresList = makeList(result.failure)

//step16: Object Property Shorthand
const createPerson = (name, age, gender) => {
    return {name, age, gender};
};

//step17: Concise Declarative Functions
const bicycle = {
    gear: 2,
    setGear(newGear) {
      this.gear = newGear;
    }
};
bicycle.setGear(3);
console.log(bicycle.gear);

//step18: Constructor Function
class Vegetable {
    constructor(name) {
        this.name = name;
    }
}
const carrot = new Vegetable('carrot');
console.log(carrot.name);

//step19: getters and setters
class Thermostat {
    constructor(fahrenheitTemp) {
        this.fahrenheitTemp = fahrenheitTemp;
    }
    get temperature() {
        return (5 / 9) * (this.fahrenheitTemp - 32);
    }

    set temperature(newTemp) {
        this.fahrenheitTemp = (newTemp * 9.0) / 5 + 32;
    }
}
const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature;

//step20: Create a Module Script
<html>
    
  <body>
    <script type="module" src = "index.js"></script>
  </body>
</html>

//step21: export to share a code block
 export const uppercaseString = (string) => {
    return string.toUpperCase();
  }
  
 export const lowercaseString = (string) => {
    return string.toLowerCase()
}
// export {uppercaseString, lowercaseString};

//step22: reuse javascript code using export
import {uppercaseString, lowercaseString} from './ES6.js';
uppercaseString("hello");
lowercaseString("WORLD!");

//step23: Use * to Import Everything from a File
import * as stringFunctions from './basic.js';

//step24: Export Fallback
export default function subtract(x, y) {
    return x - y;
}

//step25: Import a Default Export
import subtract from "./math_functions.js";

//step26: JavaScript Promise
const makeServerRequest = new Promise((resolve, reject) => {});

//step27
const makeServerRequest1 = new Promise((resolve, reject) => {
    let responseFromServer;
    if(responseFromServer) {
        resolve("We got the data");
    }
    else {
        reject("Data not received");
    }
});

//step28
makeServerRequest1.then(result => {console.log(result);});

//step29: Rejected promise
makeServerRequest.catch(error => {console.log(error);});
