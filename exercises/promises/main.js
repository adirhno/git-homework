/** @format */

//Exe1
// const randomWord = $.get("https://random-word-api.herokuapp.com/word").then(
//   (word) => {
//     $.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`).then(
//       (book) => {
//         console.log(book);
//       }
//     );
//   }
// );

//Exe2
const book = $.get("https://random-word-api.herokuapp.com/word");

const randmWord = function () {
  let words = ["ds", "adir", "reem"];
  return words[Math.random(0, 2)];
};

const randomGif = $.get(`https://random-word-api.herokuapp.com/word`);

const myPromise = Promise.all([randomGif, book]);

myPromise.then((promisesArray) => {
  [one, two] = promisesArray;
  console.log(promisesArray);
  console.log("one :" + one + "   two: " + two);
});
