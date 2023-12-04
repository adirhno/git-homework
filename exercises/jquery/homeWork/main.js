/** @format */

$("button").click(function () {
  const val = $("#my-input").val();
  const li = "<li>" + val + "</li>";
  $("#my-list").append(li);
});

//Exe2

$("body").on("click", "li", function () {
  $(this).remove();
});

//Exe3
$(".box").hover(function () {
  $(this).css("background-color", "red");
});

$(".box").on("mouseout", function () {
  $(this).css("background-color", "#8e44ad");
});
