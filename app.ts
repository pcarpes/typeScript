type input = number|string;

function sumOfValues (input1: input, input2: input) {
    if (typeof input1 === 'string' || typeof input2 === 'string') {
        return input1.toString() + input2.toString();
    } else {
        return input1 + input2;
    }

    
}

    console.log(sumOfValues(1,5));
    console.log(sumOfValues('Hello, ', 'how are you?'));
    console.log(sumOfValues('1', 5));
    