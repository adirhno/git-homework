/** @format */
let count = {
  Melon: 2,
  Umbrella: 0,
  Shoe: 0,
};

$(".item").click(function () {
  const val = $(this).text();
  const data = $(this).data().instock;

  let countc = count[val];
  countc++;
  if (data) {
    $("#cart").append(
      `<div class="cart-item">${val}<button class="remove">X</button><span">${countc}</span></div>`
    );
  }
});

$("body").on("click", ".cart-item", function () {
  console.log($(this));
  $(this).remove();
});
