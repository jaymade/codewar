arrayOfSheep = [true, true, false, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true
]

function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    count = 0;
    for (i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i] === true) {
            count++;
        }

    }
    // console.log(count)
    return count;
}


// shortcode
// function countSheeps(arrayOfSheeps) {
//     return arrayOfSheeps.filter(Boolean).length;
// }


console.log(countSheeps(arrayOfSheep));