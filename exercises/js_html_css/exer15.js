/** @format */

const names = ["Ashley", "Donovan", "Lucas"];
const ages = [23, 47, 18];
const people = [];

for (let i = 0; i < names.length; i++) {
  people.push({ name: names[i], age: ages[i] });
}
let i = 0;
while (i < people.length) {
  console.log(people[i].name + "is " + people[i].age + " years old ");
  i++;
}

//EXERCISE 3
// const posts = [
//   { id: 1, text: "Love this product" },
//   { id: 2, text: "This is the worst. DON'T BUY!" },
//   { id: 3, text: "So glad I found this. Bought four already!" },
// ];

// for (let i = 0; i < posts.length; i++) {
//   if (posts[i].text.indexOf("DON'T BUY") != -1) {
//     posts.splice(i, 1);
//   }
// }

//Exercise 4
const posts = [
  {
    id: 1,
    text: "Love this product",
    comments: [],
  },
  {
    id: 2,
    text: "This is the worst. DON'T BUY!",
    comments: [
      { id: 1, text: "Idiot has no idea" },
      { id: 2, text: "Fool!" },
      { id: 3, text: "I agree!" },
    ],
  },
  {
    id: 3,
    text: "So glad I found this. Bought four already!",
    comments: [],
  },
];

for (let i = 0; i < posts.length; i++) {
  if (posts[i].id == 2) {
    for (let j = 0; j < posts[i].comments.length; j++) {
      if (posts[i].comments[j].id == 3) {
        posts[i].comments.splice(j, 1);
      }
    }
  }
}
console.log(posts);
