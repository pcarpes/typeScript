"use strict";
function sumOfValues(input1, input2) {
    if (typeof input1 === 'string' || typeof input2 === 'string') {
        return input1.toString() + input2.toString();
    }
    else {
        return input1 + input2;
    }
}
console.log(sumOfValues(1, 5));
console.log(sumOfValues('Hello, ', 'how are you?'));
console.log(sumOfValues('1', 5));
