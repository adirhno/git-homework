/** @format */

// /** @format */

// const timer = function () {
//   console.log(new Date());
// };

// setInterval(function () {
//   console.log(new Date());
// }, 1000);

// const square = (num) => console.log(num * num);

// const getFormalTitle = (name, title) => name + " " + title;

// let formalTitle = getFormalTitle("Madamme", "Lellouche");
// console.log(formalTitle); //returns "Maddame Lellouche"

//Exe 1
// const push = function () {
//   console.log("pushing it!");
// };

// const pull = function () {
//   console.log("pulling it!");
// };

// const pushPull = (callback) => callback();

// pushPull(push); //should print "pushing it!"
// pushPull(pull); //should print "pulling it!"

//Exe 2
// const getTime = (callback) => callback(new Date());

// const returnTime = function (time) {
//   alert("The current time is: " + time);
// };

// getTime(returnTime);

//Exe3
// const displayData = function (alertDataFunc, logDataFunc, data) {
//   alertDataFunc(data);
//   logDataFunc(data);
// };

// displayData(alert, console.log, "I like to party");

// //Exe 4
// const calculateSum = (num1, num2, num3) => num1 + num2 + num3;
// console.log(calculateSum(1, 2, 3));

//Exe 5
// const capitalize = (str) => {
//   let cap = str;
//   cap = str[0].toUpperCase();
//   cap += str.slice(1).toLowerCase();

//   return cap;
// };

// //Exe 6
// const determineWeather = (temp) => {
//   if (temp > 25) {
//     return "hot";
//   }
//   return "cold";
// };

// const commentOnWeather = (temp) => console.log("It's " + determineWeather(temp));

// commentOnWeather(30); //returns "It's hot"
// commentOnWeather(22); //returns "It's cold"

//Exe 7

// const explode = (lightFunc, soundFunc, sound) => {
//   lightFunc();
//   soundFunc(sound);
// };

// const shineLight = () =>
//   (document.getElementById("box").style.backgroundColor = "yellow");

// const makeSound = (sound) => alert(sound);

// explode(shineLight, makeSound, "BOOM");



