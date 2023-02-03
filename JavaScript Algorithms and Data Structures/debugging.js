//step1: JavaScript Console
let a = 5;
let b = 1;
a++;
console.log(a);
let sumAB = a + b;
console.log(sumAB);

//step2: Browser Console vs editor console
let output = "Get this to show once in the freeCodeCamp console and not at all in the browser console";
console.log(output);
console.clear();

//step3: typeof
let seven = 7;
let three = "3";
console.log(seven + three);
console.log(typeof seven);
console.log(typeof three);

//step4: Catch Misspelled names
let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);

//step5: Catch Unclosed Parentheses, Brackets, Braces and Quotes
let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);

//step6: Mixed Usage of Single and Double Quotes
let innerHtml = "<p>Click here to <a href='#Home'>return home</a></p>";
console.log(innerHtml);

//step7: Use of Assignment Operator Instead of Equality Operator
let x = 7;
let y = 9;
let result = "to come";
if(x === y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}
console.log(result);

//step8: Missing Open and Closing Parenthesis After a Function Call
function getNine() {
    let x = 6;
    let y = 3;
    return x + y;
}
  
let result0 = getNine();
console.log(result);

//step9: Catch Arguments Passed in the Wrong Order When Calling a Function
function raiseToPower(b, e) {
    return Math.pow(b, e);
}
let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power);

//step10: Catch Off By One Errors When Using Indexing
function countToFive() {
    let firstFive = "12345";
    let len = firstFive.length;
    for (let i = 0; i < len; i++) {
      console.log(firstFive[i]);
    }
}
countToFive();

//step11: Use Caution When Reinitializing Variables Inside a Loop
function zeroArray(m, n) {
    let newArray = [];
    for (let i = 0; i < m; i++) {
      let row = [];
      for (let j = 0; j < n; j++) {
        row.push(0);
      }
      newArray.push(row);
    }
    return newArray;
}
let matrix = zeroArray(3, 2);
console.log(matrix);

//step12: Prevent Infinite Loops with a Valid Terminal Condition
function myFunc() {
    for (let i = 1; i <= 4; i += 2) {
      console.log("Still going!");
    }
}