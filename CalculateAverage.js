
// Write a function avg which calculates average of numbers in given list.


function find_average(array) {
     let sum = 0;
     for (i = 0; i < array.length; i++) {
         sum += array[i];
     }
    //  console.log(sum / array.length);
     return sum / array.length;
}

find_average([1, 1, 1]);
find_average([1, 2, 3]);

// short code
// function find_average(array) {
//     return array.reduce((a, b) => (a + b)) / array.length;
// }

