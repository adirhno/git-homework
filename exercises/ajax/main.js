/** @format */

// /** @format */

// const fetch = function (isbn) {
//   $.ajax({
//     method: "GET",
//     url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`,
//     success: function (data) {
//       console.log(data);
//     },
//     error: function (xhr, text, error) {
//       console.log(text);
//     },
//   });
// };

// $("#fetch").on("click", () => {
//   fetch(1440633908 );
// });

/** @format */

//Exe2
// const fetch = function (queryType, queryValue) {
//   $.ajax({
//     method: "GET",
//     url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
//     success: function (data) {
//       console.log(data);
//     },
//     error: function (xhr, text, error) {
//       console.log(text);
//     },
//   });
// };

// $("#fetch").on("click", () => {
//   fetch("isbn", 9789814561778);
// });

//Exe3
// const fetch = function (isbn) {
//   $.ajax({
//     method: "GET",
//     url: `https://www.googleapis.com/books/v1/volumes?author&title`,
//     success: function (data) {
//       console.log(data);
//     },
//     error: function (xhr, text, error) {
//       console.log(text);
//     },
//   });
// };

// $("#fetch").on("click", () => {
//   fetch(1440633908);
// });

//Exe4

$("#fetch").on("click", () => {
  $.ajax({
    method: "GET",

    url: `http://api.giphy.com/v1/gifs/search?q=${$(
      "#input"
    ).val()}&api_key=v6NP6FvMrt7gnBBQUXpQs7Q0Uyejg8Rl&limit=5&embedded=true`,
    success: function (result) {
      console.log(result.data[0].url);
      $("#iframe").attr(
        "src",
        "https://giphy.com/gifs/funny-cat-mlvseq9yvZhba"
      );
      console.log();
    },
  });
});
