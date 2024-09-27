console.log("hello from one.js");

const t = [1, 2, 3, 4, 5, 6];
const m2 = t.map(value => '<li>' + value + '</li>');
//console.log(m2)
const [first, second, ...rest] = t

console.log("first =", first, "second =", second)
console.log("rest =", rest)

const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function({a, b, c}) {
        return this.firstName + " " + this.lastName + "---" + a + b + c;
    },
    fullName2: function({a, b}) {
        return `${this.firstName} ${this.lastName} --- a = ${a}; b = ${b}`
    }
}

console.log("fullName: ", person.fullName({a: "AAA", b: "BBB", c: "CCC"}));
console.log("fullName2: ", person.fullName2({a: "AAAAAA", b: "BBBBBB"}));

const arto = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
    greet: function() {
      console.log('hello, my name is ' + this.name)
    },
  }

arto.edu = "PhD";
arto.growOlder = function() {this.age += 1}
console.log("const arto: ", arto.greet)
arto.greet()
console.log(arto.growOlder())
console.log(arto.age, arto.edu)
