/** @format */

// /** @format */

// let items = [
//   { item: "cheese", price: 15 },
//   { item: "arak", price: 68 },
//   { item: "hummus", price: 15 },
//   { item: "pita", price: 5 },
// ];

// let source = $("#store-template").html();

// let template = Handlebars.compile(source);

// for (let i = 0; i < items.length; i++) {
//   let newHTML = template(items[i]);
//   $(".items").append(newHTML);
// }

// console.log(items[0].item);

var classData = {
  classmates: [
    {
      name: "That on gal",
      description: "Always has the ansswer",
      awosome: true,
    },
    {
      name: "The weird dude",
      description: "Quick with a smile",
      awosome: false,
    },
    { name: "Taylor", description: "Just Taylor", awosome: true },
  ],
};
let source = $("#class-template").html();

let template = Handlebars.compile(source);

let newHtml = template(classData);

$(".items").append(newHtml);
