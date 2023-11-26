/** @format */

// $(".box").hover(function () {
//   $(this).css("background-color", "blue");
// });

// const divElm = "<div class=feedme>Feed me more</div>";

// $(".feedme").hover(function () {
//   $(".feedme").remove();
// });


$("button").on("click", function(){
    $("#blogs").append("<div class='blog'>Cool blog</div>")
  })
  
  $("#blogs").on("click", ".blog", function(){
    $(this).text("uncool blog") 
  })