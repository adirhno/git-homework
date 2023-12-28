/** @format */

let user = {
  name: "adir",
  username: "lil",
  country: "Greece",
  age: 121,
};

let users = [];

try {
  if (!user.name) throw "there is now name ";
  if (isNaN(user.age)) throw "he age is not a number";
} catch (e) {
  console.log("the error is: " + e);
}
