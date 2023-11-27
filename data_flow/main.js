/** @format */

const posts = [
  { name: "adir", text: "hi" },
  { name: "sagi", text: "whatsup" },
  { name: "leshem", text: "al" },
];

const addName = function () {
  let name = $("#name").val();
  let text = $("#name").val();
  posts.push({ name, text });
  $("#container").empty();
  render();
};

// const remove = function () {
//   let name = $("#");
//   console.log(name);
//   if (posts.name === name) {
//     $("#container").empty();
//     render();
//   }
// };

const render = function () {
  for (let i = 0; i < posts.length; i++) {
    $("#container").append(
      `<div class="line" data-id="${posts[i].name}"><span><strong> ${posts[i].name}  </strong></span><span>  ${posts[i].text}</span> <button id="rem">X</button><br>`
    );
  }
  $("#rem").on("click", function () {
    let name = $(this).data().id;
    console.log(name);
    for (let i = 0; i < posts.length; i++) {
      if (posts[i].name === name) {
        console.log(name);
        posts.splice(i, 1);
      }
    }
    $("#container").empty();
    render();
  });
};
