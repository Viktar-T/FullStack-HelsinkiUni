class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    greet() {
        console.log(`Hello my name is ${this.name}`)
    }
}

const adam = new Person("Adam Odra", 29)
adam.greet()

const jan = new Person("Janja Garnbert", 23)
jan.greet()