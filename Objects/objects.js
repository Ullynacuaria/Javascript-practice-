
// Accessing an object
let firstItem = {id: 1, name: "laptop", price: 500};
let secondItem = {id: 2, name: "watch", price: 500, brand: "Puma"};

console.log(`firstItem has a name of ${firstItem.name} and a price of ${firstItem.name}`);
console.log(`secondtItem has a name of ${secondItem["name"]} and a price of ${secondItem["price"]}`);

//Using the this word inside an object
const USD_MZN = 63.83;

let thirdItem = {id: 3,
                 name: "hearbuds",
                 brand: "Apple",
                 price: 84,
                 priceMZN: function(){ return this.price * USD_MZN;}
}

let thirdItemOther = {id: 3,
    name: "hearbuds",
    brand: "Apple",
    price: 84,
    priceMZN(){ return this.price * USD_MZN;}
}

console.log(" Price of thirdtItem in Mozambican metical: ", thirdItem.priceMZN());
console.log(" Price of ES6 thirdtItemOther in Mozambican metical: ", thirdItem.priceMZN());

let myCar = {
    make: "Nissan",
    model: "Altima",
    price: "20000",
    printDetails(){
console.log(`
Make: ${this.make}
Model: ${this.model}
Price: ${this.price}

`)
    },
    engine: {
        cylinders: 4,
        displacement: 2000,
        horsepower: 250,
        printDetails(){
            console.log(`
                Displacement: ${this.displacement}cc
                Horsepower: ${this.horsepower}bhp `)
        }
    }
};

console.log("The fields of myCar:");
myCar.printDetails();

console.log("Engine details: \n");
myCar.engine.printDetails();

//Binding a Function to an object
let otherCar = {
    make: "Nissan",
    model: "Versa",
    price: "10000",
    engine: {
        cylinders: 1.5,
        displacement: 1000,
        horsepower: 100,

    }
};

function printCarDetails(){
    console.log(`
Make: ${this.make}
Model: ${this.model}
Price: ${this.price}`)

}
function printEngineDetails(){
    console.log(`
                Displacement: ${this.displacement}cc
                Horsepower: ${this.horsepower}bhp `)

}

// Using call
console.log("Car details: \n");
printCarDetails.call(otherCar);

console.log("The fields of myCar:");
printEngineDetails.call(otherCar.engine)

console.log("My favorite car is: ");
printCarDetails.call(myCar)
printEngineDetails.call(myCar.engine)

// Object constraction
function Car(make, model, price, engine){

    this.make = make;
    this.model = model;
    this.price = price;
    this.engine = engine;
} 

let V8Engine = {
    cylinders: 8,
    displacement: 2000,
    horsepower: 500,
}

let V6Engine = {
    cylinders: 4,
    displacement: 2500,
    horsepower: 300,
}

dreamCar = new Car("Nissan", "Maxima", 42000, V8Engine )
console.log(`My dream car is ${dreamCar.make} ${dreamCar.model}`)

otherDreamCar = new Car("Porsche", "718 Cayman", 61000, V6Engine);
console.log(`My other dream car is ${otherDreamCar.make} ${otherDreamCar.model}`);
