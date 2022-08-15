let anyValue: any;
anyValue = 3;
anyValue = 'hello';
anyValue = true;

let stringValue: string = 'test';
stringValue = anyValue;
let stringValue2: string = 'test2';
stringValue2 = anyValue;

function sumOfStrings (string1: string, string2: string) {
    console.log(string1 + string2);
}

sumOfStrings(stringValue, stringValue2);
sumOfStrings('hello, ', 'how are you doing?');