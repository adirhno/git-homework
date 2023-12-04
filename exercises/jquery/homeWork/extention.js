/** @format */

for (let i = 0; i < $("span").length; i++) {
  $($("span")[i]).css("background-color", $($("span")[i]).data().color);
}

$("span").on("click", function () {
  $(".box").css("background-color", $(this).data().color);
});
