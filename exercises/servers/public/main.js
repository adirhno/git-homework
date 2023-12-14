/** @format */

const fetchBook = function () {
  const bookId = $("#input").val();
  console.log("button clicked");
  $.get(`/book/${bookId}`).then((data) => {
    console.log(data.author);
    $("body").append(`<div>${data.author}</div>`);
  });
};
