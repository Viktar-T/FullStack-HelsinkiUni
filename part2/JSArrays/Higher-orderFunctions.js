const ar1 = [1, 2, -4, 6, 8]
const animals = [
    {name: "n1", species: "sp1"},
    {name: "n2", species: "sp2"},
    {name: "n3", species: "sp1"},
    {name: "n4", species: "sp3"},
    {name: "n5", species: "sp1"},
    {name: "n6", species: "sp3"},
    {name: "n7", species: "sp1"},
]

const filtered = []
for (let i=0; i<animals.length; i++) {
    if (animals[i].species === "sp1") {
        filtered.push(animals[i])
    }
}

console.log("------for() {} -------")
console.log(filtered)

console.log("------.filter()2-------")
const filtered2 = animals.filter((animal) => animal.species === "sp1")
console.log(filtered2)

console.log("------.filter()3-------")
const isSp1 = function(animal) {
    return animal.species === "sp1"
} 
const filtered3 = animals.filter(isSp1)
console.log(filtered3)


console.log("------.map()-------")
const newAnimals = animals.map((animal) => {
    if (animal.species === "sp1") {
        animal.name += "-sp1"
        return animal
    }
    return animal
})
console.log(newAnimals)

console.log("------.forEach()-------")
const animals2 = [
    {name: "n1", species: "sp1"},
    {name: "n2", species: "sp2"},
    {name: "n3", species: "sp1"},
    {name: "n4", species: "sp3"},
    {name: "n5", species: "sp1"},
    {name: "n6", species: "sp3"},
    {name: "n7", species: "sp1"},
]
/* const forAnimal = (animal) => {
    let animal = {
        name: animal.name + "-for", 
        species: animal.species + "-for"
    }
    return animal
}
animals2.forEach((forAnimal)) */
const newAnimals2 = []
animals2.forEach((animal) => {
    let newAnimal = {
        name: animal.name + "-for", 
        species: animal.species + "-for"
    }
    newAnimals2.push(newAnimal)
})


console.log(newAnimals2)

console.log("------ar11, arr12, arr13-------")
const ar11 = ar1.map((item) => item * 10)
const ar12 = ar1.map((item) => {
    res = item * 10
    res *= 10
    return res
})
const ar13 = ar1.filter((item) => item > 0)
console.log(ar11)
console.log(ar12)
console.log(ar13)

console.log("------.find(), findIndex()-------")
const ar2 = [5, 12, 8, 130, 44, 580];
const isLargeNum = (num) => num > 100;
const ar21 = ar2.find(isLargeNum)
const ar22 = ar2.findIndex(isLargeNum)
console.log(ar21)
console.log(ar22)


