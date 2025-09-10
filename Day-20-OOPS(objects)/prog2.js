let vehicle = {
    model: `Honda`,
}

let bike = {
    name: `Hero Honda`,
    fuel: `Petrol`,
    trans: `Electric`,
}

vehicle.__proto__ = bike

console.log(`Name:       `, vehicle.name)
console.log(`Model:      `, vehicle.model)
console.log(`Fuel Type:  `, vehicle.fuel)
console.log(`Type:       `, vehicle.trans)