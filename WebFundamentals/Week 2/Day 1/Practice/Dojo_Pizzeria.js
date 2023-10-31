function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};//objet
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(pizza1);

var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza2);

var crustTypes = [
    "deep dish",
    "thin and crispy",
    "cauliflower",
];

var sauceTypes = [
    "traditional",
    "marinara",
    "bbq",
    "white sauce",
];

var cheeses = [
    "mozzarella",
    "cheddar",
    "swiss cheese",
    "blue cheese",
    "provolone",
    "parmesan",
];

var toppings = [
    "pepperoni",
    "sausage",
    "chicken",
    "olives",
    "bell peppers",
    "mushrooms",
    "anchovies"
];

function randomPick(arr) {
    var i = Math.floor(arr.length * Math.random());
    return arr[i];
}

function randomPizza() {
    var pizza = {};
    pizza.crustType = randomPick(crustTypes);
    pizza.sauceType = randomPick(sauceTypes);
    pizza.cheeses = randomPick(cheeses);
    pizza.toppings =randomPick(toppings)
    return pizza;
}

console.log(randomPizza());