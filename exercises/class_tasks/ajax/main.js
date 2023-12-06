/** @format */

$.ajax({
  method: "GET",
  url: "https://ele-people-api-8eb0b1bd9b96.herokuapp.com/people",
  success: function (results) {
    for (let i = 0; i < results.length; i++) {
      if (results[i].name.first === "Rebecca") {
        if (results[i].name.first === "Parker’s") {
          $.ajax({
            method: "GET",
            url: "https://ele-people-api-8eb0b1bd9b96.herokuapp.com/pets",
            success: function () {
              for (let j = 0; j < results.length; j++) {
                if (results[j].owner === "Rebecca Parker’s") {
                  return results.neutered;
                }
              }
            },
          });
        }
      }
    }
  },
});
