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
const fetch = function (isbn) {
  $.ajax({
    method: "GET",
    url: `https://www.googleapis.com/books/v1/volumes?author&title`,
    success: function (data) {
      console.log(data);
    },
    error: function (xhr, text, error) {
      console.log(text);
    },
  });
};

$("#fetch").on("click", () => {
  fetch(1440633908);
});
