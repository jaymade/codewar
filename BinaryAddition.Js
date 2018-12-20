// Implement a
// function that adds two numbers together and returns their sum in binary.The conversion can be done before, or after the addition.

// The binary number returned should be a string.


function addBinary(a, b) {
    // console.log((a + b).toString(2), (a + b))
    return (a + b).toString(2);
}
addBinary(1, 2);
addBinary(2, 4);

addBinary(254, 1);

// const addBinary = (a, b) => (a + b).toString(2);