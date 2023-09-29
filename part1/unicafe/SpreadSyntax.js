console.log("Hello")

console.log("------Array----------")
function sum(x, y, z) {
    return x + y + z;
  }
  
const numbers = [1, 2, 3];
console.log(sum(...numbers))


console.log("------Object----------")
const obj1 = {a: "A", b: "B", c: "C"}
const obj2 = {aa: "AA", bb: "BB", cc: "CC"}
const spread1 = {b: "BBBBBB", ...obj1, cc: "CCCCCC", ...obj2, aa: "AAAAA"}
const spread2 = { ...obj1,  ...obj2, b: "BBBBBB", cc: "CCCCCC", aa: "AAAAA"}
console.log(spread1)
console.log(spread2)

console.log("------concat()----------")
const array1 = [1, 2, 3];
const array2 = array1.map(element => element * 10);

const concat1 = array1.concat(array2)
const concat2 = "A".concat("B")
const concat3 = ["A"].concat(["B", "C"])
const concat4 = ["A", "B"].concat("C")

console.log(concat1)
console.log(concat2)
console.log(concat3)
console.log(concat4)