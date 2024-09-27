const square = p => p * p;
console.log(square(2));

const sum1 = ({a, b, c}) => a + b + c;
console.log(sum1({a: 1, b: 2, c: 3}));

const sum2 = ([a, b, c]) => a + b + c;
console.log(sum2([10, 20, 30]));

const ar1 = [10, 20, 30];
const m1 = ar1.map(x => x + 1);
console.log("m1: ", m1);
