// step 1

// This is an inline comment
/* This is a multiline comment,
 more stuff to write*/

//step 2

var myName;

//step 3

var a;
a = 7;

//step 4

var b;
b = a

//step 5
var c = 9;

//step 6
var myFirstName = "Oageng";
var myLastName = "Mashele";

//step 7
var a = 5;
var b = 10;
var c = "I am a";

a = a + 1;
b = b + 5;
c = c + " String!";

/* step 8:
use camelCase when declaring variables */

//step 9
let catName = "Oli"
let catSound = "Meow!"

//step10
const FCC = "freeCodeCamp";
let fact = "is cool!";
fact = "is awesome"
console.log(FCC, fact);

//step11
const sum = 10 + 10;

//step12
const difference = 45 - 33;

//step13
const product = 8 * 10;

//step 14
const quotient = 66 / 33;

//step15
let myVar = 87;
myVar++;

//step16
myVar--;

//step17
const ourDecimal = 5.7;
let myDecimal = 1.8;

//step18
const prod = 2.5 * 2.0;

//step19
const quot = 4.4 / 2.0;

//step20
const remainder = 11 % 3;

//step21
a += 12;
b += 9;
c += 7;

//step22
a -= 6;
b -= 15;
c -= 1;

//step23
a *= 5;
b *= 3;
c *= 10;

//step24
a /= 12;
b /= 4;
c /= 11;

//step25
const myString = "I am a \"double quoted\" string inside \"double quotes\".";

//step26
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

//step27
const mySt = "FirstLine\n\t\\SecondLine\nThirdLine"

//step28
const myS = "This is the start. " + "This is the end."

//step29
let mySting = "This is the first sentence.";
mySting += " This is the second sentence."

//step30
const myName = "Oageng";
const myStrd = "My name is " + myName + " and I am well.";

//step31
const someAdjective = "fun!";
let myStrh = "Learning to code is ";
myStrh += someAdjective;

//step32
let lastNameLength = 0;
const lastName = "Lovelace"
lastNameLength = lastName.length

//step33
let firstLetterOfLastName = "";
const lastNamee = "Lovelace";
firstLetterOfLastName = lastNamee[0];

//step34
let myStrr = "Jello World";
myStrr = "Hello World;"

//step35
const thirdLetterOfLastName = lastName[2];

//step36
const lastLetterOfLastName = lastName[lastName.length - 1];

//step37
const secondToLastLetterOfLastName = lastName[lastName.length - 2];

//step38: word blanks
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
const wordBlanks = "My " + myNoun + " which is " + myAdjective + " just " + myVerb + " and it was " + myAdverb; 

//step39: arrays
const myArray = ["Oageng", 21];

//step40
const myArray2 = [["Oageng", 21], ["Mashele", 07]];

//step41
const myArray3 = [50, 60, 70];
let myData = myArray3[0];

//step42
myArray3[0] = [45];

//step43
const myArray4 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
const myData1 = myArray4[2][1];

//step44
const myArray1 = [["John", 23], ["cat", 2]];
myArray1.push(["dog", 3])

//step45
const myArray5 = [["John", 23], ["cat", 2]];
let removedFromMyArray = myArray5.pop();

//step46
const myArray6 = [["John", 23], ["dog", 3]];
removedFromMyArray = myArray6.shift();

//step47
myArray1.unshift(["Paul", 35])

//step48
const myList = [["Oats", 2], ["Tomato",6], ["rice",1], ["sugar",2], ["fish", 3]];

//step49
function reusableFunction() {
    console.log("Hi World");
}
reusableFunction();

//step50
function functionWithArgs(a,b) {
    console.log(a+b);
}
functionWithArgs(5,2)

//step51
function timesFive(num) {
    return num * 5
}

//step52
let myGlobal = 10;
function fun1() {
    oopsGlobal = 5;
}
function fun2() {
    let output = "";
    if (typeof myGlobal != "undefined") {
      output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
      output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

//step53
function myLocalScope() {
    let myVar = 54;
    console.log('inside myLocalScope', myVar);
}
myLocalScope();
console.log('outside myLocalScope', myVar);

//step54
const outerWear = "T-Shirt";
function myOutfit() {
    const outerWear = "sweater";
    return outerWear;
}
myOutfit();

//step55
function addFive() {
    sum += 5;
}

//step56
let processed = 0;
function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7);

//step57
function nextInLine(arr, item) {
    arr.push(item);
    let a = arr.shift();
    return a;
}
let testArr = [1, 2, 3, 4, 5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//step58
function welcomeToBooleans() {
    return true;
}

//step59: IF statements
function trueOrFalse(wasThatTrue) {
    if (wasThatTrue == true) {
        return "Yes, that was true"
    }
    return "No, that was false"
}

//step60
function testEqual(val) {
    if (val == 12) { 
      return "Equal";
    }
    return "Not Equal";
}
testEqual(10);

//step61
function testStrict(val) {
    if (val===7) {
      return "Equal";
    }
    return "Not Equal";
}
testStrict(10);

//step62
function compareEquality(a, b) {
    if (a === b) { 
      return "Equal";
    }
    return "Not Equal";
}
compareEquality(10, "10");

//step63
function testNotEqual(val) {
    if (val != 99) { 
      return "Not Equal";
    }
    return "Equal";
}
testNotEqual(10);

//step64
function testStrictNotEqual(val) {
    if (val !== 17) {
      return "Not Equal";
    }
    return "Equal";
}
testStrictNotEqual(10);

//step65
function testGreaterThan(val) {
    if (val > 100) {  
      return "Over 100";
    }
  
    if (val > 10) { 
      return "Over 10";
    }
  
    return "10 or Under";
}
testGreaterThan(10);

//step66
function testGreaterOrEqual(val) {
    if (val >= 20) {  
      return "20 or Over";
    }
  
    if (val >=10 ) { 
      return "10 or Over";
    }
  
    return "Less than 10";
}
testGreaterOrEqual(10);

//step67
function testLessThan(val) {
    if (val < 25) {  
      return "Under 25";
    }
  
    if (val < 55) {  
      return "Under 55";
    }
  
    return "55 or Over";
}
testLessThan(10);

//step68
function testLessOrEqual(val) {
    if (val <= 12) {
      return "Smaller Than or Equal to 12";
    }
  
    if (val <= 24) {
      return "Smaller Than or Equal to 24";
    }
  
    return "More Than 24";
}
testLessOrEqual(10);

//step69
function testLogicalAnd(val) {
    if (val <= 50 && val >=25) {
        return "Yes";
    }
    return "No";
}
testLogicalAnd(10);

//step70
function testLogicalOr(val) {
    if (val > 20 || val < 10) {
      return "Outside";
    }
    return "Inside";
}
testLogicalOr(15);