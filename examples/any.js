"use strict";
let anyValue;
anyValue = 3;
anyValue = 'hello';
anyValue = true;
let stringValue = 'test';
stringValue = anyValue;
let stringValue2 = 'test2';
stringValue2 = anyValue;
function sumOfStrings(string1, string2) {
    console.log(string1 + string2);
}
sumOfStrings(stringValue, stringValue2);
sumOfStrings('hello, ', 'how are you doing?');
