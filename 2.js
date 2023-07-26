// String manipulation

function manipulateString(inputString, callback) {
    const manipulatedString = inputString.toUpperCase();

    callback(manipulatedString);
}

function logString(manipulatedString){
    console.log(`is: ${manipulatedString}`);
}

manipulateString("Hello World" , logString);