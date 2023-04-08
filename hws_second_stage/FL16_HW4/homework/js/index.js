'use strict';

/**
 * Class
 * @constructor
 * @param size - size of pizza
 * @param type - type of pizza
 * @throws {PizzaException} - in case of improper use
 */
function Pizza(size, type) {
   if (arguments.length < 2) {
      throw new PizzaException(PizzaException.REQUIRED_ARGUMENTS);
   } else if (Pizza.allowedSizes.includes(size) === false) {
      throw new PizzaException(PizzaException.INVALID_SIZE);
   } else if (Pizza.allowedTypes.includes(type) === false) {
      throw new PizzaException(PizzaException.INVALID_TYPE);
   }
   this.size = size;
   this.type = type;
   this.extra = [];
}
Pizza.prototype.addExtraIngredient = function (ingredient) {
   if (Pizza.allowedExtraIngredients.includes(ingredient) === false) {
      throw new PizzaException(PizzaException.INVALID_INGREDIENT);
   } else if (this.extra.includes(ingredient)) {
      throw new PizzaException(PizzaException.DUPLICATE_INGREDIENT);
   } else {
      return this.extra.push(ingredient);
   }
}

Pizza.prototype.removeExtraIngredient = function (ingredient) {
   const filteredExtras = this.extra.filter((elem) => elem.extra !== ingredient.extra);
   this.extra = filteredExtras;
}

Pizza.prototype.getSize = function () {
   return this.size;
}

Pizza.prototype.getPrice = function () {
   let totalExtra = 0;

   console.log();

   for (let i = 0; i < this.extra.length; i++) {
      let item = this.extra[i];
      totalExtra += item.price;
   }

   let totalPrice = this.size.price + this.type.price + totalExtra;
   return totalPrice;
}

Pizza.prototype.getPizzaInfo = function () {
   let extrasArr = this.extra.values();
   let logExtraArr = [];
   for (let extraItem of extrasArr) {
      logExtraArr.push(extraItem.extra);
   }
   return `size: ${this.size.size}, type: ${this.type.type}, 
   extra: ${logExtraArr}, price: ${Pizza.getPrice}`
}


/* Sizes, types and extra ingredients */
Pizza.SIZE_S = { size: 'S', price: 50 };
Pizza.SIZE_M = { size: 'M', price: 75 };
Pizza.SIZE_L = { size: 'L', price: 100 };

Pizza.TYPE_VEGGIE = { type: 'VEGGIE', price: 50 };
Pizza.TYPE_MARGHERITA = { type: 'MARGHERITA', price: 60 };
Pizza.TYPE_PEPPERONI = { type: 'PEPPERONI', price: 70 };

Pizza.EXTRA_TOMATOES = { extra: 'TOMATOES', price: 5 };
Pizza.EXTRA_CHEESE = { extra: 'CHEESE', price: 7 };
Pizza.EXTRA_MEAT = { extra: 'MEAT', price: 9 };

/* Allowed properties */
Pizza.allowedSizes = [Pizza.SIZE_S, Pizza.SIZE_M, Pizza.SIZE_L];
Pizza.allowedTypes = [Pizza.TYPE_VEGGIE, Pizza.TYPE_MARGHERITA, Pizza.TYPE_PEPPERONI];
Pizza.allowedExtraIngredients = [Pizza.EXTRA_TOMATOES, Pizza.EXTRA_CHEESE, Pizza.EXTRA_MEAT];

PizzaException.REQUIRED_ARGUMENTS = 'Required tho arguments, given: 1';

/**
 * Provides information about an error while working with a pizza.
 * details are stored in the log property.
 * @constructor
 */
function PizzaException(exeption) {
   this.exeption = exeption;
}
PizzaException.prototype.log = function () {
   console.error(this.exeption)
}

PizzaException.REQUIRED_ARGUMENTS = 'Required tho arguments, given: 1';
PizzaException.INVALID_SIZE = 'Invalid size';
PizzaException.INVALID_TYPE = 'Invalid type';
PizzaException.DUPLICATE_INGREDIENT = 'Duplicate Ingredient';
PizzaException.INVALID_INGREDIENT = 'Invalid ingredient';



/* It should work */
// // small pizza, type: veggie
// let pizza = new Pizza(Pizza.SIZE_S, Pizza.TYPE_VEGGIE);
// console.log(pizza);
// // // add extra meat
// pizza.addExtraIngredient(Pizza.EXTRA_MEAT);
// // // check price
// console.log(`Price: ${pizza.getPrice()} UAH`); //=> Price: 109 UAH
// // // add extra corn
// pizza.addExtraIngredient(Pizza.EXTRA_CHEESE);
// // // add extra corn
// pizza.addExtraIngredient(Pizza.EXTRA_TOMATOES);
// // // check price
// console.log(`Price with extra ingredients: ${pizza.getPrice()} UAH`); // Price: 121 UAH
// // // check pizza size
// console.log(`Is pizza large: ${pizza.getSize() === Pizza.SIZE_L} `); //=> Is pizza large: false
// // // remove extra ingredient
// pizza.removeExtraIngredient(Pizza.EXTRA_CHEESE);
// console.log(`Extra ingredients: ${ pizza.getExtraIngredients().length } `); //=> Extra ingredients: 2
// console.log(pizza.getPizzaInfo()); //=> Size: SMALL, type: VEGGIE; extra ingredients: MEAT,TOMATOES; price: 114UAH.

// examples of errors
// let pizza = new Pizza(Pizza.SIZE_S); // => Required two arguments, given: 1

// let pizza = new Pizza(Pizza.SIZE_S, Pizza.SIZE_S); // => Invalid type

// let pizza = new Pizza(Pizza.SIZE_S, Pizza.TYPE_VEGGIE);
// pizza.addExtraIngredient(Pizza.EXTRA_MEAT);
// pizza.addExtraIngredient(Pizza.EXTRA_MEAT); // => Duplicate ingredient
// console.log(pizza);

// let pizza = new Pizza(Pizza.SIZE_S, Pizza.TYPE_VEGGIE);
// pizza.addExtraIngredient(Pizza.EXTRA_CORN); // => Invalid ingredient