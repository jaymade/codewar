const sequenceSum = (begin, end, step) => {
    // May the Force be with you
    let sum = 0;
    if (begin > end) {
        return 0;
    }
    for (i = begin; i <= end; i += step) {
        sum += i;
    }
    console.log(sum)
    return sum;
};

sequenceSum(2, 6, 2) //12
sequenceSum(1, 5, 1) //15
sequenceSum(1, 5, 3) //5