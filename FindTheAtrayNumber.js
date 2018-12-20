function stray(numbers) {
    var a = numbers.sort();
    console.log(a);
    if (a[0] != a[1]) {
        return a[0]
    } 
    return a[a.length-1];
}

stray([1, 1, 2]);
stray([17, 17, 3, 17, 17, 17, 17]);

// function stray(numbers) {
//     for (var i in numbers) {
//         if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) { return numbers[i] }
//     }
// }