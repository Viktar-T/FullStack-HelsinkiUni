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

console.log("-----.reduce() -> .filter()")
const isSP3 = (animal) => animal.species === "sp3"
const filtered1 = animals.filter(isSP3)
console.log(filtered1)

const filtered2 = animals.reduce((filt, animal) => {
    if (animal.species === "sp3") {
        /* return filt.concat(animal) */
        filt.push(animal)
    }
    return filt
}, [])

console.log(filtered2)