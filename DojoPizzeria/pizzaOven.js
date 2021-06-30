
// function creates pizza
function pizzaOven(crustType, sauceType, cheeses, toppings){
    let pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

// create pizzas
let pizza1 = pizzaOven("deep Dish", "traditional", ["mozzarela"], ["pepperoni", "sausage"]);
let pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarela", "feta"], ["mushrooms", "olives", "onions"]);
let pizza3 = pizzaOven("thin crust", "traditional", ["parmesan"], ["beef", "pinapple"]);
let pizza4 = pizzaOven("NY style", "marinara", ["mozzarela", "cheddar"], ["peppers", "onions", "tomato", "jalapeno"]);


// Create random pizzas
let crust = ["NY style", "thin crust", "deep dish", "hand tossed"];
let sauce = ["marinara", "white sauce", "no sauce", "galic sauce", "traditional sauce"];
let cheeses = ["American", "Swiss", "Provolone", "Cheddar", "Mozzarela"];
let toppings = ["sausage", "pepperoni", "chicken", "beef", "onions", "mushrooms", "peppers", "tomato", "pinapple"];


function randomPizza(){
    let randNum = Math.floor(Math.random() * 3 + 1);
    let pizza = {};
    pizza.crustType = crust[Math.floor(Math.random() * 4)];
    pizza.sauceType = sauce[Math.floor(Math.random() * 5)];
    pizza.cheeses = [];
    pizza.toppings =[];

    for(let i = 0; i < randNum; i++) {
        pizza.cheeses.push(cheeses[Math.floor(Math.random() * 5)]);
    }

    for(let i = 0; i < randNum; i++) {
        pizza.toppings.push(toppings[Math.floor(Math.random() * 9)]);
    }
    return pizza;
}

let aRandomPizza = randomPizza();

console.log(aRandomPizza);
