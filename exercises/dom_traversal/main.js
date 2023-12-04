/** @format */

$(".generator").on("click", function () {
  const computers = [];
  let id = $(this).closest("div")[0].id;
  let data_id = $(this).closest("div").parent().data().id;
  let te = $(this).closest("div").parent().find("p").first().text();

  const computer = { cmp_id: data_id };
  computers.push(computer);

  console.log("Processor ID: " + id);
  console.log("Computer’s data-id: " + data_id);
  console.log("BUS: " + te);
});

$(".validator").on("click", function () {
  let MB = $(this).parent().parent().parent().find("p").last().text();
  let QR = $(this).parent().parent().parent().find("span").text();
  let text = $(this).parent().parent().parent().find("button").first().text();
  console.log("The generator’s text: " + text);
  console.log("The MB" + MB);
  console.log("The QR" + QR);
});
