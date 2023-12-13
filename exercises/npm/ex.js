/** @format */
const validator = require("validator");
const faker = require("faker");
//Ex. 1
//Check whether "shoobert@dylan" is a valid email (should be false)

//Exe1
validator.isEmail("shoobert@dylan");
//Ex. 2
//Check whether "786-329-9958" is a valid US mobile phone number (should be true) - use the en-US locale
console.log(validator.isMobilePhone("786-329-9958"));
//Ex. 3
//Use the following blacklist
let blacklist = ["!", "?", ".", "@", "~", ",", "'"];
//Along with validator's `blacklist` method to clean this text:
let text = "I'M SO EXCITED!!!~!";

validator.blacklist(text, blacklist);
console.log(validator.blacklist(text, blacklist));
//Ultimately, it should print "im so excited"

//Exe2

const makeHuman = function (num) {
  faker.seed(num);

  console.log(faker.number.int());
};

makeHuman(2);
