/** @format */

const fetch = function () {
  const name = $("#input").val();
  $.get(`/priceCheck/${name}`).then((data) => {
    $("body").append(`<div>${data.price}</div>`);
  });
};
