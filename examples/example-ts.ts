let button = document.getElementById('button');
let input1 = document.getElementById('input1') as HTMLInputElement;
let input2 = document.getElementById('input2') as HTMLInputElement;

function addNumber(number1:number, number2:number, mustPrint:boolean, phrase:string) {
    let result = number1 + number2
    if (mustPrint) {
        console.log (phrase + result)
    }
    return number1 + number2
}

let mustPrint = true;
let phrase = 'The sum is : ';

if (button) {
    button.addEventListener('click', () => {
        if (input1 && input2) {
            console.log(addNumber(Number(input1.value), Number(input2.value), mustPrint, phrase))
        }
    })
}