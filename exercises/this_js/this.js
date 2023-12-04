/** @format */

const buyBeans = function (numBeans) {
  this.money -= numBeans;
  this.beans += numBeans;
};

const coffeeShop = {
  beans: 40,
  money: 1000,
  buyBeans: buyBeans,

  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12,
  },

  makeDrink: function (drinkType) {
    for (drink of Object.keys(this.drinkRequirements)) {
      if (drink == drinkType) {
        if (this.beans > this.drinkRequirements[drink]) {
          this.beans -= this.drinkRequirements[drink];
          console.log("here is your " + drinkType);
          return;
        } else {
          console.log("Sorry, we're all out of beans");
        }
      }
    }
    console.log("sorry we dont have " + drinkType);
  },
};

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
// coffeeShop.buyBeans(40);
// coffeeShop.makeDrink("frenchPress");
