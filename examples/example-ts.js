"use strict";
let button = document.getElementById('button');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
function addNumber(number1, number2, mustPrint, phrase) {
    let result = number1 + number2;
    if (mustPrint) {
        console.log(phrase + result);
    }
    return number1 + number2;
}
let mustPrint = true;
let phrase = 'The sum is : ';
if (button) {
    button.addEventListener('click', () => {
        if (input1 && input2) {
            console.log(addNumber(Number(input1.value), Number(input2.value), mustPrint, phrase));
        }
    });
}
