const values = [3, 11, 7, 2, 9, 10];

function getMax(values) {
    let max = values[0];
    values.forEach((value) => {
        if (value > max) max = value;
    });
    return max;
}

function getMin(values) {
    let min = values[0];
    values.forEach((value) => {
        if (value < min) min = value;
    });
    return min;
}

function getSum(values) {
    return values.reduce((acc, value) => acc + value, 0);
}

console.log(`Sum of arrays values: ${getSum(values)}`);
console.log(`Min of arrays values: ${getMin(values)}`);
console.log(`Max of arrays values: ${getMax(values)}`);
